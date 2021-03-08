import { connectRouter } from "connected-react-router";
import { adminReducer, adminSaga } from "react-admin";
import { combineReducers } from "redux";
import createSagaMiddleware from 'redux-saga'
import { all, fork } from 'redux-saga/effects';
import authProvider from "./components/admin/authProvider";
import { dataProvider } from "./components/admin/dataProvider";

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
  user: userReducer,
  admin: adminReducer,
})

const saga = function* rootSaga() {
  yield all(
    [
      adminSaga(dataProvider, authProvider)
    ].map(fork)
  );
};
const sagaMiddleware = createSagaMiddleware();


export default { rootReducer, sagaMiddleware, saga }