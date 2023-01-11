const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS": {
      return {
        ...state,
        allProducts: [...action.payload],
        filterProducts: [...action.payload],
      };
    }

    case "GET_SORT_VALUE": {
      let userSortValue = document.getElementById("sort");
      let sortVal = userSortValue.options[userSortValue.selectedIndex].value;
      console.log(sortVal);
      return {
        ...state,
        sortingValue: sortVal,
      };
    }

    case "SORTING_PRODUCTS": {
      let newSortData;
      const { filterProducts } = state;
      let tempSortData = [...filterProducts];

      if (state.sortingValue === "a-z") {
        newSortData = tempSortData.sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
      }

      if (state.sortingValue === "z-a") {
        newSortData = tempSortData.sort((a, b) => {
          return b.title.localeCompare(a.title);
        });
      }
      if (state.sortingValue === "lowest") {
        const sortingProducts = (a, b) => {
          return a.price - b.price;
        };
        newSortData = tempSortData.sort(sortingProducts);
      }

      if (state.sortingValue === "highest") {
        const sortingProducts = (a, b) => {
          return b.price - a.price;
        };
        newSortData = tempSortData.sort(sortingProducts);
      }

      return {
        ...state,
        filterProducts: newSortData,
      };
    }

    case "UPDATE_FILTERS_VALUE": {
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    }

    case "FILTER_PRODUCTS": {
      let { allProducts } = state;
      let tempFilterProducts = [...allProducts];

      const { text, category, company, size } = state.filters;

      // filter by search
      if (text) {
        tempFilterProducts = tempFilterProducts.filter((curElement) => {
          return curElement.title.toLowerCase().includes(text);
        });
      }

      // filter by catagory
      if (category !== "all") {
        tempFilterProducts = tempFilterProducts.filter((curElement) => {
          return curElement.category === category;
        });
      }

      // filter by brand
      if (company !== "all") {
        tempFilterProducts = tempFilterProducts.filter((curElement) => {
          return curElement.brand.toLowerCase() === company.toLowerCase();
        });
      }

      // filter by size

      if (size !== "all") {
        tempFilterProducts = tempFilterProducts.filter((currElement) => {
          return currElement.size.toLowerCase() === size.toLowerCase();
        });
      }

      return {
        ...state,
        filterProducts: tempFilterProducts,
      };
    }

    case "CLEAR_FILTERS": {
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          size: "all",
        },
      };
    }

    default: {
      return { ...state };
    }
  }
};

export default FilterReducer;
