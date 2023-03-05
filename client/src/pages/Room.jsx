import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { RoomContext } from "../RoomContext";

const Room = () => {
  const { id } = useParams();
  const { ws, me } = useContext(RoomContext);

  useEffect(() => {
    if (me) ws.emit("join-room", { roomId: id, peerId: me._id });
  }, []);
  return <div>Room id {id}</div>;
};

export default Room;
