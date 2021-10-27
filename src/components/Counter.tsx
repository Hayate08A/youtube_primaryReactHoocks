import React, { useState } from 'react';

const Counter: React.VFC = () => {
  const [count, setCount] = useState(0);
  return <div>{count}</div>;
};

export default Counter;
