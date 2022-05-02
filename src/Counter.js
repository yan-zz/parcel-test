import React, { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(98);

  const onClick = () => setCount(count + 1);

  return <button onClick={onClick}>{count}</button>;
}

export default Counter;
