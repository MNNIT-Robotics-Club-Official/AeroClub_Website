import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

const userReducer = (user = null, action) => {
  switch (action.type) {
    case "SET":
      return action.payload;
    case "UPDATE_BLOG":
      return {
        ...user,
        blogs: [...user.blogs, action.payload],
      };
    case "REQUEST_COMPONENT":
      return {
        ...user,
        issues: [...user.issues, action.payload],
      };
    case "INVITE_USER":
      const new_proj_arr = user.projects.map(project => {
        if(project._id === action.payload._id)
          return action.payload
        return project
      })
      return {
        ...user,
        projects: new_proj_arr
      };
    case "CREATE_PROJECT":
      return {
        ...user,
        projects: [...user.projects, action.payload]
      }
    case "CLEAR":
      return null;
    default:
      return user;
  }
};

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    user: userReducer,
  });

export default rootReducer;
