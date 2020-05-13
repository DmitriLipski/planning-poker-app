const { v4: uuidv4 } = require('uuid');

const rooms = {
    'Default': {
        name: 'Default',
        users: []
    },
};


const testSum = (a, b) => a + b;

const addRoom = ({ roomName }) => {
    if (!roomName) {
        return {
            room: rooms['Default']
        }
    }
    roomName = roomName.trim();

    // Check for existing room
    const existingRoom = Object.keys(rooms).reduce((res, key) => {
        if (rooms[key].name === roomName) return {...rooms[key], id: key };
        return null
    }, null);

    if (existingRoom) {
        return {
            room: existingRoom
        }
    }

    // Store room
    const id = uuidv4();
    const newRoom = { name: roomName, users: [] };
    rooms[id] = newRoom;
    return { room: { ...newRoom, id } }
};

const getRooms = () => {
    return Object.keys(rooms).map((key) => ({ ...rooms[key], id: key }));
};

const addUserToRoom = (roomId, user) => {
    // Check for existing room
    const existingRoom = rooms[roomId];

    if (!existingRoom) {
        return {
            error: `There is no room with ${roomId} id`
        }
    }

    rooms[roomId] = { ...rooms[roomId], users: [...rooms[roomId].users, user.id] };
    return rooms[roomId];
};

const getRoomById = (roomId) => {
    return rooms[roomId]
};


module.exports = {
    getRooms,
    addRoom,
    addUserToRoom,
    getRoomById,

    testSum
};