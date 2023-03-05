import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RoomProvider } from "./RoomContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Room from "./pages/Room";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <RoomProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/room/:id' element={<Room/>}/>
        </Routes>
      </RoomProvider>
    </BrowserRouter>
);
