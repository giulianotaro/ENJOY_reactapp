import axios from "axios";
import {
    FETCH_ALL_FOOD_ERROR,
    FETCH_ALL_FOOD_REQUEST,
    FETCH_ALL_FOOD_SUCCESS,
  } from "./constants";


  const APP_KEY = " 463fd4d541f9c5bf56bde2f5d62f2309 ";

  const APP_ID = "d375aa7b";

  const baseURL = `https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=apple&fast-food=cooking`;


  export const fetchAllFood = () => {
      return async (dispatch) => {
          dispatch ({type: FETCH_ALL_FOOD_REQUEST})

          try {
              const {data : food } = await axios.get (baseURL)
              dispatch({type: FETCH_ALL_FOOD_SUCCESS, payload : food })
          }

          catch(e) {
            dispatch({type:FETCH_ALL_FOOD_ERROR, payload: e })

          }
      }
  }

 
