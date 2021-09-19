
const WebSocket = require('ws');

const PORT = 80;

const wsServer = new WebSocket.Server({
    port : PORT
});

wsServer.on('connection', function(socket){

    //Checks connection
    console.log ("Successful connection");

    socket.on('message',function(msg){

        //Receives data from connection
        console.log("received msg " + msg);

        //Sending data to one connection
        //socket.send("Take your shitty msg " + msg);

        //Sending data to each connection
        wsServer.clients.forEach(function(mm){
            mm.send(msg);
            //mm.send("Total no. of existing connections are " + wsServer.clients.size);
        });

        
        


    });


} );

//console.log((new Date()) + "Server is upto not so cool mm " + PORT);