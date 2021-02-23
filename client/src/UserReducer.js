export const reducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return action.payload;
    case "UPDATE_BLOG":
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case "CLEAR":
      return null;
    default:
      return state;
  }
};
