import initSqlJs from './sqljs/sql-wasm.js';
import { SQLiteFS } from './asql/index.js';
import IndexedDBBackend from './asql/indexeddb-backend.js';
import { cmaxes } from './cmaxes.js';
const decompress = require('brotli/decompress');

self.postMessage({ kind: 'loading' });
// importScripts('https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.10.1/polyfill.min.js');

class Queue {
	constructor() { this._items = []; }
	enqueue(item) { this._items.push(item); }
	dequeue() { return this._items.shift(); }
	get size() { return this._items.length; }
}

class AutoQueue extends Queue {
	constructor() {
		super();
		this._pendingPromise = false;
	}

	enqueue(action) {
		return new Promise((resolve, reject) => {
			super.enqueue({ action, resolve, reject });
			this.dequeue();
		});
	}

	async dequeue() {
		if (this._pendingPromise) return false;

		let item = super.dequeue();

		if (!item) return false;

		try {
			this._pendingPromise = true;

			let payload = await item.action(this);

			this._pendingPromise = false;
			item.resolve(payload);
		} catch (e) {
			this._pendingPromise = false;
			item.reject(e);
		} finally {
			this.dequeue();
		}

		return true;
	}
}

const aQueue = new AutoQueue();

self.onmessage = function (ev) {
	if (ev.data.kind == 'newSearch') {
		aQueue.enqueue(() => {
			const start = new Date()
			var result = db_sql.prepare("SELECT * FROM valsi where bangu='en' and w = 'klama';");
			console.log({start});
			console.log({xduration: new Date() - start, result});
			
			sisku(ev.data, function (res) {
				self.postMessage({
					kind: 'searchResults',
					results: res.results,
					req: {
						bangu: ev.data.bangu,
						seskari: ev.data.seskari,
						versio: ev.data.versio,
						query: ev.data.query
					}
				})
			})
		})
	} else if (ev.data.kind == 'parse') {
		aQueue.enqueue(() => {
			cmaxesParse({ tegerna: ev.data.tegerna }, function (res) {
				self.postMessage({
					kind: 'parse',
					results: res,
					req: ev.data,
				})
			})
		})
	} else if (ev.data.kind == 'fancu' && ev.data.cmene) {
		aQueue.enqueue(() => {
			fancu[ev.data.cmene](ev.data, function (results) {
				self.postMessage({
					kind: 'fancu',
					cmene: ev.data.cmene,
					datni: ev.data,
					results: results
				})
			})
		})
	}
}

let db_sql
async function initSQLDB() {
	let SQL = await initSqlJs({ locateFile: file => file });
	let sqlFS = new SQLiteFS(SQL.FS, new IndexedDBBackend());
	SQL.register_for_idb(sqlFS);

	SQL.FS.mkdir('/sql');
	SQL.FS.mount(sqlFS, {}, '/sql');

	db_sql = new SQL.Database('/sql/db.sqlite', { filename: true });
	db_sql.run(`
	pragma cache_size = 0;
    PRAGMA page_size=16384;
    PRAGMA journal_mode=MEMORY;
  `);
	db_sql.run('CREATE TABLE IF NOT EXISTS valsi (d text,n text,w text,r text,bangu text,s text,cache text )');
	db_sql.run('CREATE TABLE IF NOT EXISTS langs_ready (bangu TEXT, timestamp TEXT)');
	db_sql.run('CREATE TABLE IF NOT EXISTS tejufra (bangu TEXT, jufra TEXT)');
}

function runQuery(sql_query, params) {
	const start = new Date()
	console.log({ started: start, sql_query, params });

	let stmt = db_sql.prepare(sql_query);
	stmt.bind(params)
	let rows = []
	while (stmt.step()) rows.push(stmt.getAsObject());
	stmt.free();
	console.log({ duration: new Date() - start, sql_query, params });

	return rows.map(row => {
		if (row.r) row.r = JSON.parse(row.r)
		if (row.d) {
			try {
				const json = JSON.parse(row.d)
				if (Object.keys(json).length > 0) row.d = json
			} catch (error) { }
		}
		return row
	})
}

const supportedLangs = {
	sutysisku: { n: "la sutysisku", bangu: 'en' },
	'en': { n: 'English', "p": "selsku_lanci_eng" },
	'muplis': { n: 'la muplis' },
	'en-cll': { n: 'The Book', "p": "cukta", noRafsi: true, searchPriority: true },
	'en-ll': { n: 'Learn Lojban', "p": "cukta", noRafsi: true, searchPriority: true },
	jbo: { n: 'lojbo', "p": "lanci_jbo", searchPriority: true },
	ru: { n: 'русский', "p": "selsku_lanci_rus" },
	eo: { n: 'esperanto', "p": "lanci_epo" },
	es: { n: 'español', "p": "selsku_lanci_spa" },
	'fr-facile': { n: 'français', "p": "selsku_lanci_fra" },
	ja: { n: '日本語', "p": "selsku_lanci_jpn" },
	zh: { n: '中文', "p": "selsku_lanci_zho" },
}

const sufficientLangs = (searching) => [
	searching ? searching.bangu : null,
	"sutysisku",
	"en-cll",
	"en-ll",
	"en",
	"muplis",
	"jbo"
].filter(Boolean)

let sesisku_bangu = null

const fancu = {
	tejufra: async ({ bangu }, cb) => {
		let stmt = db_sql.prepare(`SELECT jufra FROM tejufra where bangu=?`);
		let tef1 = {}, tef2 = {}
		if (bangu) {
			stmt.bind([bangu])
			stmt.step()
			try {
				tef1 = JSON.parse(stmt.getAsObject().jufra)
			} catch (error) { }
		}
		stmt.bind(['en'])
		stmt.step()
		stmt.free()
		try {
			tef2 = stmt.getAsObject()
		} catch (error) { }
		cb({ ...tef1, jufra: { ...tef2.jufra, ...tef1.jufra } })
	},
	cnino_bangu: ({ bangu }) => {
		sesisku_bangu = bangu
	},
	ningau_lerosorcu: async (searching, cb) => {
		fancu.ningau_lesorcu(searching, cb, true)
	},
	ningau_lesorcu: async (searching, cb, forceAll) => {
		let langsToUpdate = []
		const response = await fetch(
			`/sutysisku/data/versio.json?sisku=${new Date().getTime()}`
		)
		let json = {}
		if (response.ok) {
			json = await response.json()

			const stmt = db_sql.prepare(`SELECT count(*) as klani FROM langs_ready where bangu=? and timestamp=?`);
			for (const lang of sufficientLangs(searching)) {
				let count = 0
				if (!forceAll) {
					stmt.bind([lang, json[lang]])
					stmt.step()
					count = stmt.getAsObject().klani
				}
				if (count === 0) langsToUpdate.push(lang)
			}
			stmt.free()

			if (langsToUpdate.length > 0) {
				for (const lang of Object.keys(supportedLangs))
					if (langsToUpdate.includes(supportedLangs[lang].bangu)) langsToUpdate.push(lang)

				const langsUpdated = await cnino_sorcu(cb, langsToUpdate, searching, json)
				console.log({ event: 'Database updated', 'No. of languages updated': langsUpdated.length })
			}
		}

		self.postMessage({
			kind: 'loader',
			cmene: 'loaded'
		})
		jufra({})
	},
	ningau_lepasorcu: async (searching, cb) => {
		const lang = searching.bangu || 'en'
		let json = {}
		const response = await fetch(
			`/sutysisku/data/versio.json?sisku=${new Date().getTime()}`
		)
		if (response.ok) {
			json = await response.json()
		}
		const stmt = db_sql.prepare(`SELECT count(*) as klani FROM langs_ready where bangu=? and timestamp=?`);
		stmt.bind([lang, json[lang]])
		stmt.step()
		const count = stmt.getAsObject().klani
		stmt.free()

		if (count > 0) return
		await cnino_sorcu(cb, [lang], searching, json)
		self.postMessage({
			kind: 'loader',
			cmene: 'loaded'
		})
	},
}

async function jufra({ bapli }) {
	if (bapli) db_sql.run(`delete from tejufra`)
	//tejufra
	const stmt = db_sql.prepare(`SELECT count(jufra) as klani FROM tejufra`);
	stmt.step()
	const nitejufra = stmt.getAsObject().klani
	stmt.free()
	if (nitejufra === 0 || bapli) {
		let json = {}
		const url = `/sutysisku/lojban/tejufra.json?sisku=${new Date().getTime()}`
		const response = await fetch(
			url
		)
		if (response.ok) json = await response.json()
		else console.log({ event: 'HTTP error', status: response.status, url })

		const stmt = db_sql.prepare(`insert into tejufra (bangu, jufra) values(?,?)`);
		Object.keys(json).forEach((key) => {
			stmt.run([key, JSON.stringify(json[key])])
		})
		console.log({ event: 'Locales fully updated' })
	}
}
function chunkArray(myArray, chunk_size, lang) {
	let index = 0;
	const arrayLength = myArray.length;
	let tempArray = [];

	for (index = 0; index < arrayLength; index += chunk_size) {
		const myChunk = myArray.slice(index, index + chunk_size);
		tempArray.push(myChunk.map(def => addCache(def, lang)));
	}

	return tempArray;
}

function addCache(def, tegerna) {
	if (def.cache) {
		if (def.w) def.cache = [...new Set(def.cache.concat([[...def.w].reverse().join("")]))]
		return { bangu: tegerna, ...def }
	}
	let cache
	if (Array.isArray(def.g)) def.g = def.g.join(";")
	cache = [def.w, def.s, def.g, def.d, def.n, def.w.split("").reverse().join("")].concat(def.r || []).filter(Boolean).join(";").toLowerCase()
	const cache2 = cache.replace(
		/[ \u2000-\u206F\u2E00-\u2E7F\\!"#$%&()*+,\-.\/:<=>?@\[\]^`{|}~：？。，《》「」『』；_－／（）々仝ヽヾゝゞ〃〱〲〳〵〴〵「」『』（）〔〕［］｛｝｟｠〈〉《》【】〖〗〘〙〚〛ッー゛゜。、・゠＝〆〜…‥ヶ•◦﹅﹆※＊〽〓♪♫♬♩〇〒〶〠〄再⃝ⓍⓁⓎ]/g,
		';'
	).split(";")
	cache = cache.replace(
		/[ \u2000-\u206F\u2E00-\u2E7F\\!"#$%&()*+,\-.\/:<=>?@\[\]^`{|}~：？。，《》「」『』；_－（）]/g,
		';'
	)
	cache = `${cache};${cache.replace(/h/g, "'")}`.split(";")
	cache = [...new Set(cache.concat(cache2))].filter(Boolean).join(" ")

	return { bangu: tegerna, ...def, cache }
}

const blobChunkLength = 5
async function cnino_sorcu(cb, langsToUpdate, searching, json) {
	langsToUpdate = [...new Set(langsToUpdate)]
	await jufra({ bapli: true })
	fancu.tejufra(searching, (results) => {
		self.postMessage({
			kind: 'fancu',
			cmene: 'tejufra',
			bangu: searching.bangu,
			results,
		})
	})

	//for each lang download dump
	let langs = langsToUpdate || sufficientLangs(searching)
	langs = langs
		.filter((lang) => lang == searching.bangu)
		.concat(langs.filter((lang) => lang != searching.bangu))
	console.log({ event: 'Preparing imports into the database', languages: langsToUpdate });

	while (langs.length > 0) {
		if (sesisku_bangu) {
			const stmt = db_sql.prepare(`SELECT count(*) as klani FROM langs_ready where bangu=?`);
			stmt.bind([sesisku_bangu])
			stmt.step()
			const savedLang_next = stmt.getAsObject().klani
			stmt.free()
			if (!savedLang_next) langs = [...new Set([sesisku_bangu].concat(langs))]
			sesisku_bangu = null
		}
		const lang = langs[0]
		langs = langs.slice(1)

		let completedRows = 0;
		console.log({ event: 'Updating the language', language: lang });

		self.postMessage({
			kind: 'loader',
			cmene: 'loading',
			completedRows: 12 + (Math.random() - 0.5) * 3,
			totalRows: 100,
			bangu: supportedLangs[lang].n
		})
		for (let i = 0; i < blobChunkLength; i++) {
			cb(`downloading ${lang}-${i}.bin dump`)
			const url = `/sutysisku/data/parsed-${lang}-${i}.bin?sisku=${new Date().getTime()}`
			const response = await fetch(url)
			let json
			if (response.ok) {
				const blob = await response.arrayBuffer()

				const decompressedData = Buffer.from(decompress(Buffer.from(blob)));
				json = JSON.parse(decompressedData);
				let rows = json.data.data[0].rows
				const totalRows = json.data.tables[0].rowCount * blobChunkLength

				const chunkSize = 250
				const all_rows = rows.length
				rows = chunkArray(rows, chunkSize, lang)
				const time = new Date()
				if (i === 0) {
					db_sql.run(`delete from valsi where bangu=?`, [lang])
					db_sql.run(`delete from langs_ready where bangu=?`, [lang])
				}
				for (const toAdd of rows) {
					db_sql.exec('BEGIN TRANSACTION');
					let stmt = db_sql.prepare('INSERT INTO valsi (d,n,w,r,bangu,s,cache) VALUES (?,?,?,?,?,?,?)');
					//value TEXT,d text,n text,w text,r text,bangu text,s text,cache text 
					for (let rec of toAdd) {
						const { d, n, w, r, bangu, s, cache } = rec
						stmt.run(
							[d, n, w, r, bangu, s, cache]
								.map(i => (typeof i == 'object') ? JSON.stringify(i || '') : (i || ''))
						);
					}
					stmt.free();
					db_sql.exec('COMMIT');
					completedRows += chunkSize
					self.postMessage({
						kind: 'loader',
						cmene: 'loading',
						completedRows,
						totalRows,
						bangu: supportedLangs[lang].n,
						banguRaw: lang
					})
				}

				console.log({ event: 'Records inserted', language: lang, 'speed, records/sec': (all_rows * 1000 / (new Date() - time)).toFixed(2) });
			}
			else {
				console.log({ event: 'HTTP error', status: response.status, url })
				break;
			}
		}
		const stmt = db_sql.prepare(`SELECT count(*) as klani FROM langs_ready where bangu=? and timestamp=?`);
		stmt.bind([lang, json[lang]])
		stmt.step()
		const savedLang = stmt.getAsObject().klani
		stmt.free()

		if (!savedLang) {
			const stmt = db_sql.prepare(`insert into langs_ready (bangu,timestamp) values(?,?)`);
			stmt.run([lang, json[lang]])
			stmt.free()
		}
		cb(`imported ${lang}-*.bin files at ${new Date().toISOString()}`)
		self.postMessage({
			kind: 'loader',
			cmene: 'loading',
			completedRows,
			totalRows: completedRows,
			bangu: supportedLangs[lang].n,
			banguRaw: lang
		})
	}
	return langsToUpdate
}

//sisku

let leijufra = {
	xuzganalojudri: '', bangudecomp: ''
}

async function cnanosisku({
	query_apos,
	query,
	bangu,
	versio,
	mapti_vreji,
	multi,
	seskari,
	secupra_vreji,
	queryDecomposition
}) {
	let rows
	if (versio === 'selmaho') {
		if (bangu === 'muplis') {
			rows = runQuery(`SELECT * FROM valsi where s = ? and bangu=?`, [query, bangu])
		} else {
			rows = runQuery(`SELECT * FROM valsi where s like ? and bangu=?`, [query + "%", bangu]).filter(valsi => typeof valsi.s === 'string' && new RegExp(`^${query}[0-9]*[a-z]*$`).test(valsi.s))
		}
	} else if (seskari === 'fanva') {
		rows = runQuery(`SELECT * FROM valsi where w= ?`, [query_apos])
			.sort((a, b) => {
				if (a.bangu === bangu) { return -1 }
				if (supportedLangs[a.bangu].searchPriority) { return 0 }
				return 1
			});
	} else if (bangu === 'muplis' && queryDecomposition.length > 1) {
		const words = queryDecomposition.sort((a, b) => {
			if (a.lenth > b.length) return -1
			return 0
		})
		rows = runQuery(`SELECT * FROM valsi where cache= ? and bangu= ?`, [words[0], bangu])
			.filter(jufra => {
				if (queryDecomposition.every(v => jufra.cache.includes(v))) return true;
				return false
			})
	} else {
		rows = runQuery(`SELECT * FROM valsi where cache like ? and bangu like ?`, ["%" + query_apos + "%", bangu + "%"])
	}
	rows = rows.map(el => {
		const { cache, ...rest } = el
		return rest;
	}).sort((a, b) => {
		if (supportedLangs[a.bangu].searchPriority) { return -1 }
		if (supportedLangs[b.bangu].searchPriority) { return 1 }
		return 0
	});
	mapti_vreji = mapti_vreji.slice().concat(
		rows.map((valsi) => {
			delete valsi.cache
			return valsi
		})
	)
	if (seskari === 'fanva' || bangu === 'muplis') {
		return { result: mapti_vreji, decomposed: false }
	}
	const { result, decomposed } = await sortthem({
		query_apos,
		query,
		bangu,
		mapti_vreji,
		multi,
		seskari,
		secupra_vreji,
	})

	const allMatches = result
	if (multi) return { result: allMatches[0], decomposed }
	if (allMatches[0].length === 0) {
		allMatches[0] = (await jmina_ro_cmima_be_lehivalsi({ query, bangu })) || []
	}
	if (allMatches[0].length === 0 || allMatches[0][0].w !== query_apos) {
		let ty = /^[A-Zh]+[0-9\*]+$/.test(query)
			? []
			: julne_setca_lotcila(
				await shortget({ valsi: query_apos, secupra: [], bangu })
			)
		if (bangu === 'muplis' || !leijufra.xuzganalojudri) {
			ty = ty.filter(({ d }) => !d || !d.nasezvafahi)
		}
		if (ty.length <= 1) return { result: ty.concat(allMatches[0]), decomposed }
		const e = {
			result: allMatches[1].concat(
				[
					{
						t: leijufra.bangudecomp,
						ot: "vlaza'umei",
						w: query,
						rfs: ty,
					},
				],
				allMatches[2]
			),
			decomposed,
		}
		return e
	}

	return { result: allMatches[0], decomposed }
}

function sortMultiDimensional(a, b) {
	if (!a.d) a.d = ''
	if (!b.d) b.d = ''
	return a.d.length < b.d.length ? -1 : a.d.length > b.d.length ? 1 : 0
}

function cmaxesParse({ tegerna }, callback) {
	try {
		let parsed = cmaxes.parse(tegerna.toLowerCase())
		parsed = parsed.filter(el => el[0] !== 'drata')
		return callback(parsed)
	} catch (error) { }
	return callback([])
}

function reconcatenate(selsku) {
	try {
		let parsed = cmaxes.parse(selsku.toLowerCase())
		parsed = parsed.filter(el => el[0] !== 'drata')
		const reconcatenated = parsed.map(el => el[1]).join(' ')
		return { parsed, reconcatenated }
	} catch (error) { }
	return { parsed: [], reconcatenated: selsku }
}

function maklesi_levalsi(selsku) {
	let reconcatenated = selsku
	if (!leijufra.xuzganalojudri || selsku.search(/[^aeiouyAEIOY]'/) > -1) return ['', selsku]
	try {
		const { parsed: parsedString, reconcatenated } = reconcatenate(selsku)
		const oddEls = parsedString.filter((_, index) => index % 2 == 1)
		if (oddEls.length > 0 && oddEls.every(el => el[0] == 'zei')) return ['zei-lujvo', reconcatenated]
		if (parsedString.length == 1) return parsedString[0]
		if (parsedString.every(el => el[0] === 'cmavo')) return ['cmavo-compound', reconcatenated]
		if (parsedString.length > 1) return ['phrase', reconcatenated]
	} catch (e) { }
	return ['', reconcatenated]
}

function mevuhilevelujvo(tegerna) {
	if (!leijufra.xuzganalojudri) return
	if (tegerna.includes(' zei ')) return ['@'].concat(tegerna.split(' '))
	let text
	try {
		text = cmaxes.parse(tegerna).toString().split(',')
	} catch (err) {
		return
	}
	if (!['lujvo'].includes(text[0]) || text.length !== 2) return
	return text[1].split('-')
}

function setca_lotcila(doc) {
	if ([undefined, ''].includes(doc.t))
		doc.t = (doc.bangu !== 'muplis' && leijufra.xuzganalojudri) ? maklesi_levalsi(doc.w)[0] : ''
	return doc
}

function decompose(selsku) {
	return leijufra.xuzganalojudri
		? reconcatenate(selsku).reconcatenated
			.replace(/ zei /g, '_zei_')
			.split(' ')
			.map((b) => b.replace(/_zei_/g, ' zei ').replace(/-/g, ''))
		: selsku.split(' ')
}

function julne_setca_lotcila(a) {
	return a.reduce((b, n) => {
		if (n) b.push(setca_lotcila(n))
		return b
	}, [])
}

async function sohivalsi(queryDecomposition, bangu) {
	let secupra = []
	for (let valsi_index = 0; valsi_index < queryDecomposition.length; valsi_index++) {
		for (let valsi2_index = queryDecomposition.length - 1; valsi2_index >= valsi_index; valsi2_index--) {
			const o = queryDecomposition.slice(valsi_index, valsi2_index + 1).join(' ')
			secupra = await shortget({ valsi: o, secupra, bangu })
		}
	}
	return secupra
}

async function jmina_ro_cmima_be_lehivalsi({ query, def, bangu }) {
	let vuhi_le_ve_lujvo = mevuhilevelujvo(query)
	if (!vuhi_le_ve_lujvo) return def ? [def] : []
	let vuhi_le_valsi = []
	if (vuhi_le_ve_lujvo[0] === '@') {
		vuhi_le_valsi = vuhi_le_ve_lujvo.slice(1).map((i) => ({
			w: i,
			d: { nasezvafahi: true },
		}))
		for (let j = 0; j < vuhi_le_valsi.length; j++) {
			const le_valsi = vuhi_le_valsi[j].w
			const le_se_skicu_veljvo = runQuery(`SELECT * FROM valsi where w = ? and bangu=? limit 1`, [le_valsi, bangu])[0]

			if (le_se_skicu_veljvo) {
				vuhi_le_valsi[j] = le_se_skicu_veljvo
				vuhi_le_valsi[j]['w'] = le_valsi
			}
		}
	} else {
		for (const ji in vuhi_le_ve_lujvo) {
			const rf = runQuery(`SELECT * FROM valsi, json_each(valsi.r) where json_valid(valsi.r) and json_each.value=? and valsi.bangu=? limit 1`, [vuhi_le_ve_lujvo[ji], bangu])[0]

			if (rf) {
				vuhi_le_valsi.push(rf)
			} else if (vuhi_le_ve_lujvo[ji].length > 2) {
				vuhi_le_valsi = vuhi_le_valsi.concat([
					{
						t: '',
						d: { nasezvafahi: true },
						w: vuhi_le_ve_lujvo[ji],
						r: [vuhi_le_ve_lujvo[ji]],
					},
				])
			}
		}
	}
	const aw = julne_setca_lotcila(vuhi_le_valsi) // .filter(function(i){return !i.d.nasezvafahi});
	return [
		{
			t: aw.length > 0 ? 'lujvo' : maklesi_levalsi(query)[0],
			w: query,
			d: { nasezvafahi: true },
			rfs: aw,
		},
	]
}

async function shortget({ valsi, secupra, nasisku_filohipagbu, bangu }) {
	const hasDefinitions = runQuery(`SELECT * FROM valsi where bangu=? and (w=? COLLATE NOCASE or d=? COLLATE NOCASE)`, [bangu, valsi.toLowerCase(), valsi.toLowerCase()])
	if (hasDefinitions.length > 0)
		return secupra.concat(hasDefinitions)
	if (!nasisku_filohipagbu) {
		if (valsi.replace(/ zei /g, '-zei-').split(' ').length === 1) {
			let ye = maklesi_levalsi(valsi)
			if (ye[0] === 'cmavo-compound' || ye[0] === 'zei-lujvo') {
				ye = ye[1].split(' ')
				for (const jj in ye) {
					secupra = await shortget({
						valsi: ye[jj],
						secupra,
						nasisku_filohipagbu: true,
						bangu,
					})
				}
			} else if (ye[0] !== '') {
				ye = ye.filter((_, index, __) => index % 2 !== 0)
				for (const _ in ye) {
					secupra = await shortget({
						valsi: ye[_].replace(/-/g, ''),
						secupra,
						nasisku_filohipagbu: true,
						bangu,
					})
				}
			}
		} else {
			let vuhilevelujvo = mevuhilevelujvo(valsi)
			if ((vuhilevelujvo || [])[0] === '@') {
				vuhilevelujvo = vuhilevelujvo.slice(1)

				for (let j = 0; j < vuhilevelujvo.length; j++) {
					const le_valsi = vuhilevelujvo[j]
					const le_se_skicu_valsi = runQuery(`SELECT * FROM valsi where w = ? and bangu=? limit 1`, [le_valsi, bangu])[0]

					if (le_se_skicu_valsi) {
						vuhilevelujvo[j] = le_se_skicu_valsi
						vuhilevelujvo[j]['w'] = le_valsi
					}
				}
				secupra.concat(vuhi_le_valsi)
			} else if (vuhilevelujvo) {
				for (const r of vuhilevelujvo) {
					const foundRafsi = runQuery(`SELECT value FROM valsi, json_each(valsi.r) where json_valid(valsi.r) and json_each.value=? and valsi.bangu=? limit 1`, [r, bangu])[0]
					if (foundRafsi) secupra.push(foundRafsi)
				}
			}
		}
	} else {
		let ff = await jmina_ro_cmima_be_lehivalsi({ query: valsi, bangu })
		ff = ff[0] && ff[0].rfs ? ff[0].rfs : undefined
		secupra = secupra.concat([
			{ t: '', d: { nasezvafahi: true }, w: valsi, rfs: ff },
		])
	}
	return secupra
}

function isCoreWord(def) {
	return ['gismu', 'cmavo'].includes(def.t)
}

function defaultPriorityGroups() {
	return {
		wordFullMatch: [],
		wordFullMatchAdditional: [],
		glossMatch: [],
		rafsiMatch: [],
		wordSemiMatch: [],
		selmahoFullMatch: [],
		selmahoSemiMatch: [],
		oneOfSelmahosFullMatch: [],
		oneOfSelmahosSemiMatch: [],
		glossSemiMatch: [],
		defGoodMatch: [],
		defInsideMatch: [],
		otherMatch: []
	}
}

async function sortthem({
	mapti_vreji,
	multi,
	query,
	bangu,
	query_apos,
	seskari,
	secupra_vreji,
}) {
	let decomposed = false
	let searchPriorityGroups = defaultPriorityGroups()
	for (let i = 0; i < mapti_vreji.length; i++) {
		const def = setca_lotcila(mapti_vreji[i]) // todo: optimize for phrases
		if (def) {
			if (def.w === query || def.w === query_apos) {
				if (!supportedLangs[def.bangu].noRafsi) {
					def.rfs = JSON.parse(
						JSON.stringify(
							julne_setca_lotcila(await sohivalsi(decompose(def.w), bangu))
						)
					).filter(({ w }) => w !== def.w)
					decomposed = true
					if (def.rfs.length === 0) {
						def.rfs = (
							await jmina_ro_cmima_be_lehivalsi({ query: def.w, def: def, bangu })
						)[0].rfs
					}
				}
				if (def.bangu == bangu) searchPriorityGroups.wordFullMatch.push(def)
				else searchPriorityGroups.wordFullMatchAdditional.push(def)
			} else if (def.g && def.g.search(`^${query}(;|$)`) === 0) {
				searchPriorityGroups.glossMatch.push(def)
			} else if (def.r && def.r.join(' ').search(`\\b${query}\\b`) >= 0) {
				searchPriorityGroups.rafsiMatch.push(def)
			} else if (def.w.search(`(^| )(${query_apos}|${query})( |$)`) >= 0) {
				searchPriorityGroups.wordSemiMatch.push(def)
			} else if (def.s && typeof def.s === 'string' && def.s === query) {
				searchPriorityGroups.selmahoFullMatch.push(def)
			} else if (def.s && typeof def.s === 'string' && def.s.indexOf(query) === 0) {
				searchPriorityGroups.selmahoSemiMatch.push(def)
			} else if (def.s && Array.isArray(def.s) && def.s.includes(query)) {
				searchPriorityGroups.oneOfSelmahosFullMatch.push(def)
			} else if (def.s && Array.isArray(def.s) && def.s.filter(i => i.indexOf(query) === 0).length > 0) {
				searchPriorityGroups.oneOfSelmahosSemiMatch.push(def)
			} else if (
				(def.g && def.g.search(`\\b${query}\\b`) >= 0) ||
				def.w.search(`\\b(${query_apos}|${query})`) >= 0 ||
				def.w.search(`(${query_apos}|${query})\\b`) >= 0
			) {
				searchPriorityGroups.glossSemiMatch.push(def)
			} else if (def.d && typeof def.d === 'string') {
				if (def.d.toLowerCase().search(`^${query}\\b`) >= 0) {
					searchPriorityGroups.defGoodMatch.push(def)
				} else if (def.d.toLowerCase().search(`\\b${query}\\b`) >= 0) {
					searchPriorityGroups.defInsideMatch.push(def)
				}
				else {
					searchPriorityGroups.otherMatch.push(def)
				}
			} else {
				searchPriorityGroups.otherMatch.push(def)
			}
		}
	}
	// if (ui[0].length === 0 && !multi) {
	// secupra_vreji = jmina_ro_cmima_be_lehivalsi(query) || [];
	// }

	let firstMatches
	let secondMatches
	if (seskari === 'catni') {
		const searchPriorityGroups_unofficial_words = defaultPriorityGroups()
		const searchPriorityGroups_official_words = defaultPriorityGroups()
		Object.keys(searchPriorityGroups).forEach(group => {
			searchPriorityGroups[group].forEach(def => {
				if (isCoreWord(def)) searchPriorityGroups_official_words[group].push(def)
				else searchPriorityGroups_unofficial_words[group].push(def)
			})
		})
		firstMatches = secupra_vreji.concat(searchPriorityGroups.wordFullMatch, searchPriorityGroups.wordFullMatchAdditional)
		secondMatches = [].concat(
			searchPriorityGroups_official_words.selmahoFullMatch,
			searchPriorityGroups.oneOfSelmahosFullMatch,
			searchPriorityGroups.rafsiMatch,
			searchPriorityGroups_official_words.defGoodMatch,
			searchPriorityGroups_official_words.defInsideMatch,
			searchPriorityGroups_official_words.wordSemiMatch,
			searchPriorityGroups_official_words.glossMatch,
			searchPriorityGroups_official_words.glossSemiMatch,
			searchPriorityGroups_unofficial_words.glossMatch,
			searchPriorityGroups_unofficial_words.selmahoFullMatch,
			searchPriorityGroups_unofficial_words.wordSemiMatch,
			searchPriorityGroups_unofficial_words.glossSemiMatch,
			searchPriorityGroups_unofficial_words.defGoodMatch,
			searchPriorityGroups_unofficial_words.defInsideMatch,
			searchPriorityGroups_official_words.otherMatch,
			searchPriorityGroups_unofficial_words.otherMatch,
		)
	} else if (seskari === 'cnano') {
		firstMatches = secupra_vreji.concat(searchPriorityGroups.wordFullMatch, searchPriorityGroups.wordFullMatchAdditional, searchPriorityGroups.glossMatch)
		secondMatches = [].concat(
			searchPriorityGroups.selmahoFullMatch,
			searchPriorityGroups.oneOfSelmahosFullMatch,
			searchPriorityGroups.rafsiMatch,
			searchPriorityGroups.wordSemiMatch,
			searchPriorityGroups.glossSemiMatch,
			searchPriorityGroups.defGoodMatch,
			searchPriorityGroups.defInsideMatch,
			searchPriorityGroups.otherMatch,
		)
	} else {
		firstMatches = secupra_vreji.concat(searchPriorityGroups.wordFullMatch, searchPriorityGroups.wordFullMatchAdditional, searchPriorityGroups.glossMatch)
		secondMatches = [].concat(
			searchPriorityGroups.selmahoFullMatch,
			searchPriorityGroups.oneOfSelmahosFullMatch,
			searchPriorityGroups.rafsiMatch,
			searchPriorityGroups.wordSemiMatch,
			searchPriorityGroups.glossSemiMatch,
			searchPriorityGroups.defGoodMatch,
			searchPriorityGroups.defInsideMatch,
			searchPriorityGroups.otherMatch,
		)
	}
	// if (firstMatches && firstMatches.w === query_apos) {
	//   for (let a = 1; a < firstMatches.length; a++) {
	//     if (firstMatches[a].l && firstMatches[a].d === `{${query_apos}}`) {
	//       firstMatches.splice(a, 1)
	//       --a
	//     }
	//   }
	// }
	return {
		result: [firstMatches.concat(secondMatches), firstMatches, secondMatches],
		decomposed,
	}
}

async function sisku(searching, callback) {
	const { query, seskari, bangu, versio, leijufra: leijufra_incoming, loadingState } = searching
	//connect and do selects

	if (!leijufra.bangu) {
		const stmt = db_sql.prepare(`SELECT jufra FROM tejufra where bangu=?`);
		let tef1 = {}
		if (bangu) {
			stmt.bind([bangu.toString()])
			stmt.step()
			try {
				tef1 = JSON.parse(stmt.getAsObject().jufra)
			} catch (error) { }
		}
		stmt.bind(['en'])
		stmt.step()
		stmt.free()

		if (tef1 && tef1.jufra) Object.keys(tef1.jufra.window || {}).forEach((key) => {
			const subKey = key.replace('window.', '')
			leijufra[subKey] = tef1.jufra.window[key]
		})
	}

	leijufra = { ...leijufra, ...leijufra_incoming }
	if (query.length === 0) return
	let secupra_vreji = []
	const query_apos = query.replace(/[h‘]/g, "'").toLowerCase()
	const queryDecomposition = decompose(query_apos)

	if (query.indexOf('^') === 0 || query.slice(-1) === '$') {
		let first1000 = runQuery(`SELECT * FROM valsi where bangu = ? and ? like '%' || w || '%' limit 1000`, [bangu, query.toLowerCase()])[0]

		secupra_vreji = julne_setca_lotcila(
			(
				await sortthem({
					query_apos,
					query,
					bangu,
					mapti_vreji: first1000,
					multi: false,
					seskari,
					secupra_vreji: [],
				})
			).result[0]
		)
	} else if (seskari === 'rimni') {
		secupra_vreji = await siskurimni({ query, bangu })
	} else if (bangu !== 'muplis' && queryDecomposition.length > 1) {
		const { result, decomposed } = await cnanosisku({
			mapti_vreji: [],
			multi: true,
			query,
			bangu,
			query_apos,
			seskari,
			secupra_vreji,
		})
		secupra_vreji = result
		if (!decomposed) {
			secupra_vreji.push({
				t: 'bangudecomp',
				ot: "vlaza'umei",
				w: query,
				rfs: julne_setca_lotcila(await sohivalsi(queryDecomposition, bangu)),
			})
		}
	} else {
		const { result } = await cnanosisku({
			mapti_vreji: [],
			multi: false,
			query,
			bangu,
			versio,
			query_apos,
			seskari,
			secupra_vreji,
			queryDecomposition
		})
		secupra_vreji = result
	}
	callback({ results: secupra_vreji })
}

function krulermorna(t) {
	return `.${t
		.replace(/\./g, '')
		.replace(/^/, '.')
		.replace(/h/g, "'")
		.toLowerCase()
		.replace(/([aeiouy\.])u([aeiouy])/g, '$1w$2')
		.replace(/([aeiouy\.])i([aeiouy])/g, '$1ɩ$2')
		.replace(/au/g, 'ḁ')
		.replace(/ai/g, 'ą')
		.replace(/ei/g, 'ę')
		.replace(/oi/g, 'ǫ')
		.replace(/\./g, '')}`
}

async function siskurimni({ query, bangu }) {
	if (query.length === 0) return
	const rimni = [[], [], [], [], [], [], [], [], []]
	let query_apos
	let queryF
	let queryR
	function cupra_lo_porsi(a) {
		for (let i = 0; i < a.length; i++) {
			const doc = setca_lotcila(a[i]) // todo: optimize for phrases
			if (!doc) continue
			const docw = krulermorna(doc.w)
				.replace(/([aeiouḁąęǫy])/g, '$1-')
				.split('-')
				.slice(-3)
			if (queryR && docw[0].slice(-1) !== queryR[0].slice(-1)) continue
			const right = docw[1].slice(-1)
			const reversal =
				docw[1].slice(-3, -1) ===
				queryF[1].slice(-3, -1).split('').reverse().join('')
			const left = queryF[1].slice(-1)
			let sli = false
			if (
				(left === 'a' && right.search('[eao]') >= 0) ||
				(left === 'e' && right.search('[iea]') >= 0) ||
				(left === 'i' && right.search('[ie]') >= 0) ||
				(left === 'o' && right.search('[aou]') >= 0) ||
				(left === 'u' && right.search('[aou]') >= 0)
			) {
				sli = true
			}
			if (krulermorna(doc.w) === query) {
				rimni[0].push(doc)
				continue
			} else if (docw[2] || '' === queryR[2] || '') {
				// if (queryR[2])
				if (
					(docw[0].match(queryR[0]) || []).length > 0 &&
					(docw[1].match(queryR[1]) || []).length > 0 &&
					left === right
				) {
					rimni[1].push(doc)
				} else if (
					(docw[0].match(queryR[0]) || []).length > 0 &&
					(docw[1].match(queryR[1]) || []).length > 0 &&
					sli
				) {
					rimni[2].push(doc)
				} else if (
					(docw[1].match(regexify(queryR[2] || '')) || []).length > 0 &&
					left === right
				) {
					rimni[3].push(doc)
				} else if (
					(docw[1].match(regexify(queryR[2] || '')) || []).length > 0 &&
					sli
				) {
					rimni[4].push(doc)
				} else if (
					(docw[0].match(queryR[0]) || []).length > 0 &&
					sli &&
					reversal
				) {
					rimni[5].push(doc)
				} else if (
					(docw[0].match(queryR[0]) || []).length > 0 &&
					(docw[1].match(queryR[1]) || []).length > 0
				) {
					rimni[6].push(doc)
				}
			} else if (
				queryR[1] &&
				(docw[0].match(queryR[0]) || []).length > 0 &&
				(docw[1].match(queryR[1]) || []).length > 0
			) {
				rimni[7].push(doc)
			} else {
				rimni[8].push(doc)
			}
		}
		const sortArray = ({ ar }) => {
			if (ar.length === 0) return []
			const gism = []
			const expgism = []
			const cmav = []
			const expcmav = []
			const drata = []
			for (let c = 0; c < ar.length; c++) {
				if (ar[c].t === 'gismu') {
					gism.push(ar[c])
				} else if (ar[c].t === 'experimental gismu') {
					expgism.push(ar[c])
				} else if (ar[c].t === 'cmavo') {
					cmav.push(ar[c])
				} else if (ar[c].t === 'experimental cmavo') {
					expcmav.push(ar[c])
				} else {
					drata.push(ar[c])
				}
			}
			return gism
				.sort(sortMultiDimensional)
				.concat(
					expgism.sort(sortMultiDimensional),
					cmav.sort(sortMultiDimensional),
					expcmav.sort(sortMultiDimensional),
					drata.sort(sortMultiDimensional)
				)
		}

		return rimni.reduce((list, x) => list.concat(sortArray({ ar: x })), [])
	}

	function regexify(t) {
		return t
			.replace(/[lmnr]/g, '[lmnr]')
			.replace(/[ɩw]/g, '[ɩw]')
			.replace(/[pb]/g, '[pb]')
			.replace(/[fv]/g, '[fv]')
			.replace(/[td]/g, '[td]')
			.replace(/[sz]/g, '[sz]')
			.replace(/[cj]/g, '[cj]')
			.replace(/[kg]/g, '[kg]')
			.replace(/x/g, '[xk]')
	}

	queryR = krulermorna(query)
		.replace(/([aeiouḁąęǫy])/g, '$1-')
		.split('-')
		.slice(-3)
	queryF = queryR.slice()
	if (queryR.length >= 2) {
		queryR[1] = queryR[1].replace(/[aeiouḁąęǫy]/, '[aeiouḁąęǫy]')
	}
	let r = /.*([aeiouḁąęǫy])/.exec(queryR[0])
	if (r === null) return []
	queryR[0] = r[1]
	if (queryR.length === 2) {
		r = runQuery(`SELECT * FROM valsi where bangu=?`, [bangu])
			.filter((valsi) => {
				const queryRn = krulermorna(valsi.w)
					.replace(/([aeiouḁąęǫy])/g, '$1-')
					.split('-')
					.slice(-3)
				if (
					queryRn.length === 2 &&
					queryRn[0].split('').slice(-1)[0] ===
					queryR[0].split('').slice(-1)[0] &&
					setca_lotcila(valsi)
				)
					return true
				return false
			})
			.toArray()
	} else {
		query_apos = regexify((queryR || []).join(''))
		r = runQuery(`SELECT * FROM valsi where bangu=?`, [bangu])
			.filter(({ w }) => {
				if (krulermorna(w).match(`${query_apos.toLowerCase()}$`))
					return true
				return false
			})
			.toArray()
	}
	return cupra_lo_porsi(r)
}
aQueue.enqueue(initSQLDB)

self.postMessage({ kind: 'ready' });
