import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const AuthButton: React.VFC = () => {
  const auth = useContext(AuthContext);
  console.log(auth);
  return <div></div>;
};

export default AuthButton;
