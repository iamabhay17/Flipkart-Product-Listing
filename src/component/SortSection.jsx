import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import styled from "styled-components";
import { useFilterContext } from "../context/Filter_Context";

const SortSection = () => {
  const { filterProducts, sorting } = useFilterContext();

  return (
    <Wrapper>
      <div className="empty"></div>
      <div className="products-qty">{filterProducts.length} total products</div>
      <div className="sort-dropdown">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="sort-selection-style"
            onClick={sorting}
          >
            <option value="lowest">Price --low to high</option>
            <option value="highest">Price --high to low</option>
            <option value="a-z">A to Z</option>
            <option value="z-a">Z to A</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

export default SortSection;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  .sort-dropdown {
    .sort-selection-style {
      border: none;
      outline: none;
    }
  }
`;
