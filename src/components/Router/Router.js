import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../../Main";
import LoginPage from "../Member/LoginPage";
import Membership from "../Member/Membership";
/* import LoginPage from "../Header/LoginPage"; */

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/Member/Membership" element={<Membership />} />
        <Route path="/" element={<Main />} />
        <Route path="/Member/LoginPage" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default Router;
