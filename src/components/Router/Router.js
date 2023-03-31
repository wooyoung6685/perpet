import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../../Main";
import LoginPage from "../Member/LoginPage";
import Membership from "../Member/Membership";
import UploadPage from "../Upload/UploadPage";
import ProductsDetail from "../Product/ProductsDetail";
import Category from "../Product/Category";
/* import LoginPage from "../Header/LoginPage"; */

function Router() {
  return (
    <div>
      <Routes>
        <Route path='/Member/Membership' element={<Membership />} />
        <Route path='/' element={<Main />} />
        <Route path='/Member/LoginPage' element={<LoginPage />} />
        <Route path='/Upload/UploadPage' element={<UploadPage />} />
        <Route path='/products/:id' element={<ProductsDetail />} />
        <Route path='/products/:category' element={<Category />} />
        <Route path='/products/:category:id' element={<ProductsDetail />} />
      </Routes>
    </div>
  );
}

export default Router;
