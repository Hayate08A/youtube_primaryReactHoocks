import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter';
import InputForm from './components/inputForm/InputForm';

function App() {
  return (
    <div className='App'>
      <h2>#3 useEffect</h2>
      <Counter />
      {/* <InputForm /> */}
    </div>
  );
}

export default App;
