import React, { useEffect, useState } from 'react';

const Counter: React.VFC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log('マウント時とcount1が変化した時にuseEffectが発火');
    setCount1((prevCount) => prevCount + 1);
  }, [count1]);

  return (
    <div>
      <div>
        <span>カウント１</span>
        <button
          onClick={() => {
            setCount1((prevCount) => prevCount + 1);
          }}
        >
          {count1}
        </button>
      </div>
      <div>
        <span>カウント２</span>
        <button
          onClick={() => {
            setCount2((prevCount) => prevCount + 1);
          }}
        >
          {count2}
        </button>
      </div>
    </div>
  );
};

export default Counter;
