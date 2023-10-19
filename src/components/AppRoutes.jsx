import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./Main";
import Chat from "./Chat";
import Weather from "./Weather";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/chat" element={<Chat />} />
    <Route path="/weather" element={<Weather />} />
  </Routes>
);

export default AppRoutes;
