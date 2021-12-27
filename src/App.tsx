import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import UserAuth from "./components/userAuth/UserAuth";

function App() {
  return (
    <AuthProvider
      childlen={
        <div className="App">
          <h2>#4 useContext</h2>
          <UserAuth />
        </div>
      }
    />
  );
}

export default App;
