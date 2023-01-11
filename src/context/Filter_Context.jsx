import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./Product_Context";
import reducerFn from "../reducers/filterReducer";

const FilterContext = createContext();

const initialState = {
  filterProducts: [],
  allProducts: [],
  sortingValue: "lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    size: "all",
  },
};

const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducerFn, initialState);

  //sorting

  const sorting = () => {
    dispatch({ type: "GET_SORT_VALUE" });
  };

  //filtering

  const updateFilterValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  //clearing filter

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  //sorting products by every trigger
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sortingValue, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider
      value={{ ...state, sorting, updateFilterValue, clearFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { useFilterContext, FilterContextProvider };
