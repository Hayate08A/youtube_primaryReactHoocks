import React, { useEffect, useState } from 'react';

const Counter: React.VFC = () => {
  const [count, setCount] = useState(0);

useEffect(() => {
  console.log("effect");
  
})

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
