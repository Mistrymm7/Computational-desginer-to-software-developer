
const WebSocket = require('ws');

//const ServerAddress = "ws://127.0.0.1:3500";
const ServerAddress = "wss://websockets-mm-simpleserver.glitch.me/";


const ws = new WebSocket(ServerAddress,{
    headers:{
        "user-agent":"Mozilla"
    }

});

ws.on('open', function(){
    ws.send("Hi Server, I am cool client");

});

ws.on('message',function(msg){
    console.log("Received msg from server: " + msg);

});