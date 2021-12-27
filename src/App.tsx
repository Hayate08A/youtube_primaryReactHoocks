import React from "react";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider
      childlen={
        <div className="App">
          <h2>#4 useContext</h2>
        </div>
      }
    />
  );
}

export default App;
