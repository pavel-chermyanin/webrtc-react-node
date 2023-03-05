import { v4 as uuidV4 } from "uuid";

const rooms = {};

export const roomHandler = (socket) => {
  const createRoom = () => {
    console.log("User created the Room");
    const roomId = uuidV4();
    rooms[roomId] = [];
    socket.emit("room-created", { roomId });
  };

  const joinRoom = ({ roomId, peerId }) => {
    console.log("User joined the Room ", roomId, peerId);
    socket.join(roomId);
  };

  socket.on("create-room", createRoom);
  socket.on("join-room", joinRoom);
};
