import { createStore } from "redux";

const initState = {
  
  shopList:
   [
    {
      product: "",
      id: 1,
    },
  ],
};

const listReducer = (state, action) => {
  switch (action.type) {

  

    case "add":
      return {
        shopList: [...state.shopList, action.payload],
      };

    case "remove":
      return {
        shopList: state.shopList.filter((item) => item.id !== action.payload), 
      };

    default:
      return state;
  }
};

export const store = createStore(listReducer, initState);
