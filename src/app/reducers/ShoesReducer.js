import { GET_ALL_SHOES, GET_ALL_SHOES_ERROR } from "../types";
// import { cartItems } from "../../constant";

const initialState = {
  error: "",
  shoes: []
}

export const ShoesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SHOES: {
      return {...state, error: "", shoes: action.payload.data.shoes}
    }
    case GET_ALL_SHOES_ERROR: {
      return {...state, error: "Something went wrong!"}
    }
    default:
      return state
  }
}