import { GET_ALL_SHOES, GET_ALL_SHOES_ERROR } from "../types";
import { cartItems } from "../../constant";
import axios from "axios";

export const getAllShoes = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}shoe/getall`)
      dispatch({
        type: GET_ALL_SHOES,
        payload: { data },
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_SHOES_ERROR,
      });
    }
  };
};