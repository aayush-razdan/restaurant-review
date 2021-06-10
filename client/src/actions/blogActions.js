import { GET_BLOGS, ADD_BLOG, DELETE_BLOG, BLOGS_LOADING } from "./types";
import axios from "axios";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";
export const getBlogs = () => (dispatch) => {
  dispatch(setBlogsLoading());
  axios
    .get("/api/blog")
    .then((res) =>
      dispatch({
        type: GET_BLOGS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteBlog = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/blog/${id}`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: DELETE_BLOG,
        payload: id,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addBlog = (blog) => (dispatch, getState) => {
  axios
    .post("/api/blog", blog, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: ADD_BLOG,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setBlogsLoading = () => {
  return {
    type: BLOGS_LOADING,
  };
};
