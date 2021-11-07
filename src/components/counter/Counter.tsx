import React, { useEffect, useState } from 'react';

const Counter: React.VFC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log('effect');
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setCount1((prevCount) => prevCount + 1);
        }}
      >
        {count1}
      </button>
      <button
        onClick={() => {
          setCount2((prevCount) => prevCount + 1);
        }}
      >
        {count2}
      </button>
    </div>
  );
};

export default Counter;
