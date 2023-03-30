import React, { useState, useEffect } from "react";
import "./Header.css";
import Login from "./Login";
import Logo from "./Logo";
import NavButton from "./NavButton";
import Navigation from "./Navigation";
import { Input, Form } from "antd";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { API_URL } from "../../config/constants";
import "./SearchBar.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Header() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState("");
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    let url = `${API_URL}/products`;
    axios
      .get(url)
      .then((result) => {
        setProducts(result.data.product);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const searchFilter = (e) => {
    const data = [];
    products.map((el) => {
      if (e.target.value == el.category) {
        setSearch("active");
        data.push(el);
      } else {
        setDatas([]);
        setSearch("");
      }
      setDatas(data);
    });
  };
  console.log(datas);
  return (
    <div className='header'>
      <div className='header_main'>
        <div className='header_main-logo'>
          <Logo />
        </div>
        <div className='header_main-searchbar'>
          <div className='searchbar_main'>
            <Form>
              <Input className='searchbar' size='large' onChange={searchFilter} />
              <Button style={{ fontSize: "25px" }} className='searchbar_icon' size='large' type='text' danger shape='circle' icon={<SearchOutlined />}></Button>
            </Form>
          </div>
          <div id={`${search}`} className='search_contents'>
            {datas.map((el, idx) => {
              return (
                <Link
                  to={`/products/${el.id}`}
                  key={`${el.id}`}
                  onClick={() => {
                    setDatas([]);
                    setSearch("");
                  }}
                >
                  <div className='search_content-box'>
                    <img className='search_content-img' src={`${API_URL}/${el.image}`} />
                    <span className='search_content-text'>{el.name}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className='header_side'>
          <div className='header_side-login'>
            <Login />
          </div>
        </div>
      </div>
      <div className='header_nav'>
        <Navigation />
        <NavButton />
      </div>
    </div>
  );
}

export default Header;
