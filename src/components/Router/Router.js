import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../../Main";
import LoginPage from "../Member/LoginPage";
import Membership from "../Member/Membership";
import UploadPage from "../Upload/UploadPage";
import Products from "../Product/Products";
/* import LoginPage from "../Header/LoginPage"; */

function Router() {
  return (
    <div>
      <Routes>
        <Route path='/Member/Membership' element={<Membership />} />
        <Route path='/' element={<Main />} />
        <Route path='/Member/LoginPage' element={<LoginPage />} />
        <Route path='/Upload/UploadPage' element={<UploadPage />} />
        <Route path='/products/:id' element={<Products />} />
      </Routes>
    </div>
  );
}

export default Router;
