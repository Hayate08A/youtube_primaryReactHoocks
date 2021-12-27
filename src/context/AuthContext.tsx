import React, { useState, createContext } from "react";

type TProps = {
  childlen: React.ReactNode;
};

type TInitialAuth = {
  userAuth: boolean;
  setUserAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = createContext<TInitialAuth | null>(null);

export const AuthProvider: React.VFC<TProps> = ({ childlen }) => {
  const [userAuth, setUserAuth] = useState(false);
  return (
    <AuthContext.Provider value={{ userAuth, setUserAuth }}>
      {childlen}
    </AuthContext.Provider>
  );
};
