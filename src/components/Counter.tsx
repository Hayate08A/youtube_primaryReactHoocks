import React, { useState } from 'react';

function initializeCounter() {
  for (let i = 0; i < 20000; i++) {
    console.log(i);
  }
  return 0;
}

const Counter: React.VFC = () => {
  const [count, setCount] = useState(initializeCounter());
  return (
    <button
      onClick={() => {
        setCount((prevCount) => prevCount + 1); // 最新のcountを取得し変更(?)
        setCount((prevCount) => prevCount + 1);
      }}
    >
      {count}
    </button>
  );
};

export default Counter;
