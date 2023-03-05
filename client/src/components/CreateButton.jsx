import React, { useContext } from "react";
import { RoomContext } from "../RoomContext";

const CreateButton = () => {
  const { ws } = useContext(RoomContext);
  const createRoom = () => {
    ws.emit("create-room");
  };
  return (
    <button
      onClick={createRoom}
      className="bg-rose-400 py-2 px-4 rounded-lg text-xl hover:bg-rose-600 text-white"
    >
      Start new meeting
    </button>
  );
};

export default CreateButton;
