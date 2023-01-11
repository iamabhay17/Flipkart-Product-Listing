import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Filter from "./component/Filter";
import Header from "./component/Header";
import Products from "./component/Products";
import { useProductContext } from "./context/Product_Context";

function App() {
  return (
    <Wrapper>
      <div className="search-bar">
        <Header />
      </div>
      <div className="main">
        <div className="sidebar">
          <Filter />
        </div>
        <div className="products">
          <Products />
        </div>
      </div>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  .search-bar {
    width: 100vw;
    height: 10vh;
    background-color: skyblue;
  }
  .main {
    display: flex;
    height: 90vh;
    .sidebar {
      background-color: #f8f9fa;
      flex-basis: 15vw;
    }
    .products {
      flex-basis: 85vw;
    }
  }
`;
