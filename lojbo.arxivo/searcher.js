// JavaScript Document
const fs = require("fs"),
  path = require("path-extra"),
  Database = require('better-sqlite3'),
  recursive = require("recursive-readdir"),
  simpleParser = require('mailparser').simpleParser;
// createdb(); //создаем базу
query('besto', 20); //поиск фразы в сообщениях, выдает список сообщений в телом не более max сообщений
// getFilePaths();

async function getFilePaths(a) {
  if (!a) a = "/home/gleki/archive/";
  return await new Promise((resolve, reject) => {
    recursive(a, ["*.zip", ".*"], (err, files) => {
      if (err) {
        resolve();
      } else {
        resolve(files);
      }
    })
  })
}

async function createdb() {
  const files = await getFilePaths();
  //создаем базу:
  // таблица messages
  const db = new Database(path.join(__dirname, "messages.sql"));
  db.pragma('journal_mode = WAL');
  db.prepare("DROP TABLE IF EXISTS 'messages'").run();
  db.prepare("CREATE TABLE messages (subject TEXT, text TEXT,  behi TEXT, date TEXT)").run();
  //db.run("PRAGMA locking_mode = EXCLUSIVE");
  //db.run("PRAGMA temp_store = FILE");
  //db.run("PRAGMA cache_size = 100");
  //db.run("PRAGMA synchronous = OFF");
  const begin = db.prepare('BEGIN');
  const commit = db.prepare('COMMIT');
  const rollback = db.prepare('ROLLBACK');

  // Higher order function - returns a function that always runs in a transaction
  function asTransaction(func) {
    return function(...args) {
      begin.run();
      try {
        func(...args);
        commit.run();
      } catch (e) {
        console.log(e.toString());
      } finally {
        if (db.inTransaction) rollback.run();
      }
    }
  }

  const insert = db.prepare("INSERT INTO messages VALUES ($subject, $text, $behi, $date)");
  const insertMany = asTransaction((data) => {
    for (const obj of data) insert.run(obj);
  });
  let inc = [];
  for (const path of files) {
    const body = fs.readFileSync(path, {
      encoding: 'utf8'
    }).replace(/^(\n)*From ([^ ]+) (.*?)\n/, 'From: $2\n');
    const parsed = await simpleParser(body);
    const {
      text,
      subject,
      from,
      date
    } = parsed;
    if (from && from.text) {
      inc.push({
        subject: (subject || '').toString(),
        text: (text || '').toString(),
        behi: (from.text || '').toString(),
        date: (date || '').toString()
      })
    } else { // if (body.toLowerCase().indexOf("<html") >= 0)
      inc.push({
        subject: '',
        text: body,
        behi: '',
        date: ''
      })
    }
  }

  insertMany(inc);
  db.close();
};

function query(str, max) {
  str = new RegExp(str, "i");
  const db = new Database(path.join(__dirname, "messages.sql"));
  db.register(function regexp(text) {
    return str.test(text) ? 1 : 0
  });
  db.pragma('journal_mode = WAL');
  const rows = db.prepare(`SELECT m.subject as subject, m.text as text, m.behi as behi, m.date as date FROM messages m where (regexp(m.text)=1) order by m.subject,m.date limit ${max}`).all();
  console.log(rows.map(i => [i.subject,i.text.substr(0,100)]));
  db.close();
}
