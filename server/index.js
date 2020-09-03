const server = require('ws').Server;
const s = new server({ port: 5001 })

s.on('connection', function(ws) {
    ws.on('message', function(message) {
        console.log("Received: " + message);
        ws.send("From Server: " + message);
    });

    ws.on('close', function() {
        console.log("I lost a client")
    });

    console.log("one more client connected");
})