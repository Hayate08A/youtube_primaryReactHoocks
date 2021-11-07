import React, { useEffect, useState } from 'react';
import classes from './Counter.module.scss';

const Counter: React.VFC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log('マウント時とcount1が変化した時にuseEffectが発火');
    // setCount1((prevCount) => prevCount + 1);
  }, [count1]);

  return (
    <div className={classes.root}>
      <div className={classes.buttonWrapper}>
        <span className={classes.buttonText}>カウント１</span>
        <button
          onClick={() => {
            setCount1((prevCount) => prevCount + 1);
          }}
        >
          {count1}
        </button>
      </div>
      <div className={classes.buttonWrapper}>
        <span className={classes.buttonText}>カウント２</span>
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
