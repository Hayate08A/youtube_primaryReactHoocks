import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import Bank from "./pages/bank/Bank";

function App() {
  return (
    <AuthProvider
      childlen={
        <div className="App">
          <h2>#5 useCReducer</h2>
          <Bank />
        </div>
      }
    />
  );
}

export default App;
