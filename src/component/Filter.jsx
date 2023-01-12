import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/Filter_Context";
import { brandList, categoryList, sizeList } from "../db/products";

const Filter = () => {
  const {
    updateFilterValue,
    filters: { category },
    clearFilters,
  } = useFilterContext();
  return (
    <Wrapper>
      <div className="filter-heading">
        <div className="heading">Filters</div>
        <button className="clear-all-btn" onClick={clearFilters}>
          Clear All
        </button>
      </div>
      <div className="filter-category">
        {/* category */}
        <h6>Category</h6>
        <div className="categories">
          {categoryList.map((item) => (
            <button
              className="category-item"
              key={item.id}
              value={item.value}
              name="category"
              onClick={updateFilterValue}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* brand */}
        <h6>Brand</h6>
        <form action="#" className="brand-list">
          <select name="company" id="company" onClick={updateFilterValue}>
            {brandList.map((item) => (
              <option value={item.value} name="company">
                {item.label}
              </option>
            ))}
          </select>
        </form>

        {/* price-range  */}
        <h6>Sizes</h6>
        <form action="#" className="brand-list">
          <select name="size" id="size" onClick={updateFilterValue}>
            {sizeList.map((item) => (
              <option value={item.value} name="size">
                {item.label}
              </option>
            ))}
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

export default Filter;

const Wrapper = styled.div`
  .filter-heading {
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;
    button {
      background-color: transparent;
      text-transform: uppercase;
      border: none;
      outline: none;
      font-size: 0.9rem;
      color: #4e46f5;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .filter-category {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding: 1rem;
    h6 {
      color: #4e46f5;
    }
    .categories {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      padding-left: 1rem;
      margin-bottom: 1rem;
      button {
        background-color: transparent;
        border: none;
        outline: none;
        text-align: left;
        &:hover {
          color: #4e46f5;
        }
      }
    }
    .brand-list {
      padding-left: 1rem;
      margin-bottom: 1rem;
    }
  }
`;
