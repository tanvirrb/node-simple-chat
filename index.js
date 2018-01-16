let express = require('express');
let socket = require('socket.io');

//App setup
let app = express();

let server = app.listen(4000, function () {
    console.log("Listening to requests on port 4000");
});

//Static files
app.use(express.static('public'));

//Socket setup
let io = socket(server);

io.on('connection', function (socket) {

    socket.on('chat', function (data) {
        io.sockets.emit('chat', data);
    });
});