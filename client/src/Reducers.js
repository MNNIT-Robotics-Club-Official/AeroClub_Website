import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

const userReducer = (user = null, action) => {
  switch (action.type) {
    case "SET":
      return action.payload;
    case "UPDATE_BLOG":
      return {
        ...user,
        blogs: [...user.blogs, user.payload],
      };
    case "CLEAR":
      return null;
    default:
      return user;
  }
};

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  user: userReducer
})

export default rootReducer