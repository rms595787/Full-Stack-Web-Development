import React from "react";
import { createContext, useState } from "react";

export const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Rahul" });
  const updateUser = (newName) => {
    setUser({ name: newName });
  };
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
