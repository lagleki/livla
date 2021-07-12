io = require('socket.io-client')

var socket1Chat, socket1Chat_connected
socket1Chat = io.connect("https://jbotcan.org:9091", { transports : ['websocket'] });
  socket1Chat.on("connect", function () {
    socket1Chat_connected = true
    console.log('cnected');
    
  });
  socket1Chat.on("connect_error", function () {
    console.log('1chat connection error')
  });
  socket1Chat.on("sentFrom", function (data) {
    console.log({sentFrom: data});
  });
  socket1Chat.on("history", function (data) {
    console.log({history: data});
    
  });
