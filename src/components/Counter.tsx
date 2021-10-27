import React, { useState } from 'react';

const Counter: React.VFC = () => {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

export default Counter;
