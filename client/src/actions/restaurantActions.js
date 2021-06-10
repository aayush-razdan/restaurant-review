import {
  GET_RESTAURANTS,
  // ADD_RESTAURANT,
  // DELETE_RESTAURANT,
  RESTAURANTS_LOADING,
} from "./types";
import axios from "axios";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";
export const getRestaurants = () => (dispatch) => {
  dispatch(setRestaurantsLoading());
  axios
    .get("/api/restaurant")
    .then((res) =>
      dispatch({
        type: GET_RESTAURANTS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// export const deleteRestaurant = (id) => (dispatch, getState) => {
//   axios
//     .delete(`/api/restaurants/${id}`, tokenConfig(getState))
//     .then((res) =>
//       dispatch({
//         type: DELETE_RESTAURANT,
//         payload: id,
//       })
//     )
//     .catch((err) =>
//       dispatch(returnErrors(err.response.data, err.response.status))
//     );
// };

// export const addRestaurant = (item) => (dispatch, getState) => {
//   axios
//     .post("/api/restaurants", item, tokenConfig(getState))
//     .then((res) =>
//       dispatch({
//         type: ADD_RESTAURANT,
//         payload: res.data,
//       })
//     )
//     .catch((err) =>
//       dispatch(returnErrors(err.response.data, err.response.status))
//     );
// };

export const setRestaurantsLoading = () => {
  return {
    type: RESTAURANTS_LOADING,
  };
};
