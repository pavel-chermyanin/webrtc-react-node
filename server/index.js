import express from 'express'
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import { roomHandler } from "./room/index.js"



const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User connected");

  roomHandler(socket);

  socket.on("disconnect", () => {
    console.log("User disconnected");
  })
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
