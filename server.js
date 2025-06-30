const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
    }
});

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/favicon.ico', (req, res) => res.status(204).end());

const rooms = {};

io.on('connection', (socket) => {
    socket.on('createRoom', (userId) => {
        const roomId = Math.random().toString(36).substring(2, 10);
        rooms[roomId] = { creator: socket.id, users: [userId] };
        socket.join(roomId);
        socket.emit('roomCreated', roomId);
    });

    socket.on('joinRoom', ({ roomId, userId }) => {
        if (rooms[roomId]) {
            rooms[roomId].users.push(userId);
            socket.join(roomId);
            socket.emit('roomCreated', roomId);
        } else {
            socket.emit('error', 'Room does not exist');
        }
    });

    socket.on('draw', (data) => {
        io.to(data.roomId).emit('draw', data);
    });

    socket.on('clear', ({ roomId, userId }) => {
        io.to(roomId).emit('clear', { userId });
    });

    socket.on('clearAll', (roomId) => {
        if (rooms[roomId] && rooms[roomId].creator === socket.id) {
            io.to(roomId).emit('clearAll');
        }
    });

    socket.on('clearStroke', ({ roomId, userId, strokeId }) => {
        io.to(roomId).emit('clearStroke', { userId, strokeId });
    });

    socket.on('disconnect', () => {
        for (const roomId in rooms) {
            const room = rooms[roomId];
            room.users = room.users.filter(id => id !== socket.id);
            if (room.users.length === 0) {
                delete rooms[roomId];
            }
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));