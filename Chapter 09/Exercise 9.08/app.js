const express = require('express')
const app = express()

// Listen on port 3000
server = app.listen(3000)

// Configuring Socket
const io = require("socket.io")(server)

//middlewares
app.use(express.static('public'));


//listen on every connection
io.on('connection', (socket) => {
	console.log('New user connected');

    //listen on change_username
    socket.on('change_username', (data) => {
        socket.username = data.username
    })

    //listen on new_message
    socket.on('new_message', (data) => {
        //broadcast the new message
        io.sockets.emit('new_message', {message : data.message, username : socket.username});
    })

    //listen on typing
    socket.on('typing', (data) => {
    	socket.broadcast.emit('typing', {username : socket.username})
    })

    //listen on typing
    socket.on('stop_typing', (data) => {
        socket.broadcast.emit('stop_typing', {username : socket.username})
    })
})
