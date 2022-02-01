import {
  FETCH_ALL_FOOD_ERROR,
  FETCH_ALL_FOOD_REQUEST,
  FETCH_ALL_FOOD_SUCCESS,
} from "./constants";

const initFood = {
  food: [],
  error: null,
  loading: false,
};

export default (state = initFood, action) => {
  switch (action.type) {
    case FETCH_ALL_FOOD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ALL_FOOD_SUCCESS:
      return {
        ...state,
        loading: false,
        food: action.payload,
      };

    case FETCH_ALL_FOOD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_STARSHIP_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADD_STARSHIP_SUCCESS:
      return {
        ...state,
        food: [...state.food, action.payload],
        loading: false,
      };

    case ADD_STARSHIP_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case DELETE_STARSHIP_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DELETE_STARSHIP_SUCCESS:
      return {
        ...state,
        loading: false,
        food: state.food.map((item) => item.food.label !== action.payload),
      };
    case DISCARD_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
