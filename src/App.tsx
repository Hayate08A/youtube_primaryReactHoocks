import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter';
// import InputForm from './components/inputForm/InputForm';

function App() {
  const [isDisplay, setIsDisplay] = useState(true);
  const handleDisplay = () => {
    setIsDisplay(!isDisplay);
  };
  return (
    <div className='App'>
      <h2>#3 useEffect</h2>
      <button onClick={() => handleDisplay()}>
        {isDisplay ? 'コンポーネントを非表示' : 'コンポーネントを表示'}
      </button>
      {isDisplay && <Counter />}
      {/* <InputForm /> */}
    </div>
  );
}

export default App;
