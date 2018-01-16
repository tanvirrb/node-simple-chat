//Make connection
let socket = io.connect('http://localhost:4000');

//Query DOM
let message = document.getElementById('message'),
    username = document.getElementById('username'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');

//Emit events
btn.addEventListener('click', function () {
    socket.emit('chat', {
        message: message.value,
        username: username.value
    });
    message.value = "";
});

message.addEventListener('keypress', function () {
    socket.emit('typing', username.value);
});

//Listen for events
socket.on('chat', function (data) {
    feedback.innerHTML = "";
    output.innerHTML += '<p><strong>' + data.username + ': </strong>' + data.message + '</p>';
});

socket.on('typing', function (data) {
    feedback.innerHTML = '<p><em>' + data + ' is typing a message......</em></p>';
});