import React, { createContext, useReducer } from "react";
import { reducer } from "./UserReducer";
export const UserContext = createContext();

export default function UserProvider(props) {
  const [state, dispatch] = useReducer(reducer, null);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}
