import { GET_CITIES, CITIES_LOADING } from "./types";
import axios from "axios";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";
export const getCities = () => (dispatch) => {
  dispatch(setCitiesLoading());
  axios
    .get("/api/city")
    .then((res) =>
      dispatch({
        type: GET_CITIES,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setCitiesLoading = () => {
  return {
    type: CITIES_LOADING,
  };
};
