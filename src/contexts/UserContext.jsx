import React, { createContext, useState } from "react";
const UserContext = createContext();

export function UserContextProvider(props) {
  //   const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [workSpace, setWorkSpace] = useState([]);
  const [userData, setUserData] = useState([
    {
      userName: "test",
      email: "test@gmail.com",
      password: "Test.123",
      passwordConfirm: "",
    },
  ]);
  return (
    <UserContext.Provider
      value={{
        // isLogin,
        // setIsLogin,
        isLoading,
        setIsLoading,
        workSpace,
        setWorkSpace,
        userData,
        setUserData,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
