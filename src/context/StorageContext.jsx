import React, { createContext, useState } from "react";
import deleteUser from "../cookies/deleteUser";
import editUser from "../cookies/editUser";
import getUsers from "../cookies/getUsers";
import saveUser from "../cookies/saveUser";

export const StorageContext = createContext({});

export default function Storage({ children }) {
  const [data, setData] = useState({
    user: {},
    users: [],
  });

  function getStorageUsers(userId) {
    if (userId) {
      const user = getUsers(userId);
      setData((state) => ({ ...state, user }));
    } else {
      const users = getUsers(userId);
      setData((state) => ({ ...state, users }));
    }
  }

  function editStorageUser(userId, userData) {
    editUser(userId, userData);
    getStorageUsers();
    getStorageUsers(userId);
  }

  function deleteStorageUser(userId) {
    deleteUser(userId);
    getStorageUsers();
  }

  function saveStorageUser(user) {
    saveUser(user);
    getStorageUsers();
  }

  return (
    <StorageContext.Provider
      value={{
        getStorageUsers,
        editStorageUser,
        deleteStorageUser,
        saveStorageUser,
        data,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
}
