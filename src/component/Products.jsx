import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/Filter_Context";
import Card from "./Card";
import SortSection from "./SortSection";

const Products = () => {
  const { filterProducts } = useFilterContext();

  return (
    <Wrapper>
      <div className="sort-section">
        <SortSection />
      </div>
      <div className="products-section">
        {filterProducts.map((item) => (
          <div className="product-card" key={item.id}>
            <Card product={item} />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Products;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  .sort-section {
    height: 6vh;
    background-color: #f8f9fa;
  }
  .products-section {
    overflow-y: auto;
    height: 84vh;
    display: flex;
    flex-wrap: wrap;
    .product-card {
      width: 25%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
