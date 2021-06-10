import { v4 as uuidv4 } from "uuid";
import {
  GET_BLOGS,
  ADD_BLOG,
  DELETE_BLOG,
  BLOGS_LOADING,
} from "../actions/types";

const initialState = {
  blogs: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BLOGS:
      return {
        ...state,
        blogs: action.payload,
        loading: false,
      };
    case DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== action.payload),
      };
    case ADD_BLOG:
      return {
        ...state,
        blogs: [action.payload, ...state.blogs],
      };
    case BLOGS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
