import React, { useState } from 'react';
import styled from 'styled-components';

export function Counter() {
  const CounterButton = styled.button`
    background-color: #222;
    border: solid;
    border-radius: 7%;
    padding: 3%;
    font-size: x-large;
    color: bisque;
  `;

  const [count, setCount] = useState(98);

  const onClick = () => setCount(count + 1);

  return <CounterButton onClick={onClick}>{count}</CounterButton>;
}

export default Counter;
