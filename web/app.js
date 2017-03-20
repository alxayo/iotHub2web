var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 8088;


var IoTWebApp = function () {
  console.log('IoT Web App Up and runing!');

  app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
  });

  http.listen(port, function(){
    console.log('listening on *:' + port);
  });
  
  io.on('connection', function(socket){
    console.log('client connecto to WS server');
  })
};

IoTWebApp.prototype.emitMsg = function (msg) {
  io.emit('iotmsg', msg);
}

 module.exports = IoTWebApp;