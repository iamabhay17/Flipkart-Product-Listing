import { createContext, useContext, useEffect, useReducer } from "react";
import reducerFn from "../reducers/productReducer";
import { dataList } from "../db/products";

const AppContext = createContext();

const initialState = {
  loading: "false",
  isError: "false",
  products: [],
};

const AppProvider = ({ children }) => {
  //useReducer
  const [state, dispatch] = useReducer(reducerFn, initialState);

  //getPRoducts FN
  const getProducts = () => {
    dispatch({ type: "ADD_PRODUCTS", payload: dataList });
  };

  //useEffect for initial render
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

//custom hook

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useProductContext };
