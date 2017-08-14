var io = require('socket.io')();

//socket 链接
io.on('connection', function (socket) {
    console.log(socket.handshake.headers.cookie)
    socket.on('send', function (data) {
        console.log(data)
        io.emit('receive', data);
    });

    socket.on('login', function (data) {
        console.log(data)
        io.emit('receive', data);
    });

    socket.on('addJoinRecord', function (data) {
        console.log(data)
        io.emit('receive_join', data);
    });

});

exports.listen = function (server) {
    return io.listen(server);
};