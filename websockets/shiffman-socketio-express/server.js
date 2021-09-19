var express = require('express');

var app = express();

var server = app.listen(3000);

app.use(express.static('public'));

console.log("Server test");

//Socket code

var socket = require('socket.io');

var io = socket(server); 

io.sockets.on('connection', newConnection);
 
function newConnection(socket){

    console.log('new connnection' + socket.id);
    console.log(io.engine.clientsCount) ;

    socket.on ('sendmousepos', readingmousepos);

    function readingmousepos(data){
        //console.log(data);
        socket.broadcast.emit('fromserver',data);

        //send message to everyone including the client who sent
        //io.sockets.emit('abc',data);
    }

}

