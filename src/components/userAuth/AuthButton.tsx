import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const AuthButton: React.VFC = () => {
  const auth = useContext(AuthContext);
  console.log(auth);

  const handleAuthCtlr = () => {
    auth?.setUserAuth(auth.userAuth ? false : true);
  };

  return (
    <React.Fragment>
      {auth?.userAuth ? (
        <button onClick={handleAuthCtlr}>ログアウト</button>
      ) : (
        <button onClick={handleAuthCtlr}>ログイン</button>
      )}
    </React.Fragment>
  );
};

export default AuthButton;
