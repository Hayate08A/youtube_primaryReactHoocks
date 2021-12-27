import React, { createContext } from "react";

type TProps = {
  childlen: React.ReactNode;
};

export const AuthContext = createContext<boolean>(false);

export const AuthProvider: React.VFC<TProps> = ({ childlen }) => {
  return <AuthContext.Provider value={false}>{childlen}</AuthContext.Provider>;
};
