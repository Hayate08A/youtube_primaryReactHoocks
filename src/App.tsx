import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import Counter from "./components/counter/Counter";
import ItemList from "./components/itemList/ItemList";
// import InputForm from './components/inputForm/InputForm';

function App() {
  const [isDisplay, setIsDisplay] = useState(true);
  const handleDisplay = () => {
    setIsDisplay(!isDisplay);
  };
  return (
    <div className="App">
      <h2>#4 useContext</h2>
      {/* <button onClick={() => handleDisplay()}>
        {isDisplay ? "コンポーネントを非表示" : "コンポーネントを表示"}
      </button> */}
      {/* {isDisplay && <Counter />} */}
      {/* <InputForm /> */}
      <ItemList />
    </div>
  );
}

export default App;
