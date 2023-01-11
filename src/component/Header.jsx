import React, { useState } from "react";
import styled from "styled-components";

import { AiFillCaretDown } from "react-icons/ai";
import { BsSearch, BsFillCartFill } from "react-icons/bs";
import { useFilterContext } from "../context/Filter_Context";

const Header = () => {
  const {
    filters: { text },
    updateFilterValue,
  } = useFilterContext();
  return (
    <Wrapper>
      <div className="searchbar">
        {/* head of navbar */}
        <div className="head">
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            alt="flipkart-icon"
          />
        </div>

        {/* mid of navbar */}
        <div className="mid">
          <form onSubmit={(e) => e.preventDefault}>
            <input
              type="text"
              name="text"
              placeholder="Search for products, brands and More..."
              value={text}
              onChange={updateFilterValue}
            />
          </form>
          <BsSearch className="searchbar-icon" />
        </div>

        {/* tail of navbar */}
        <div className="tail">
          <button
            className="btn"
            style={{
              backgroundColor: "#fff",
              padding: "0.25rem 0.75rem",
              borderRadius: "0",
            }}
          >
            Login
          </button>
          <div className="dropdown-link">
            Menu <AiFillCaretDown />
          </div>
          <div className="cart-link">
            <BsFillCartFill /> Cart
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  .searchbar {
    display: flex;
    width: 100vw;
    height: 10vh;
    background-color: #4e46f5;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
  }
  .head img {
    width: 80px;
  }

  .mid {
    background-color: #fff;
    padding: 0.5rem 0.5rem;
    width: 480px;
    border-radius: 0.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    form {
      width: 90%;
    }
  }
  .mid input {
    border: 0;
    outline: 0;
    width: 100%;
  }
  .searchbar-icon {
    font-weight: bold;
    color: black;
    cursor: pointer;
  }

  .tail {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2.5rem;
    color: #fff;
    .btn {
      border: none;
      outline: none;
    }
  }
  .dropdown-link {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;
