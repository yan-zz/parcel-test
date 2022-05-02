import React from 'react';
import styled from 'styled-components';
import { Hello } from './Hello';
import { Counter } from './Counter';

export function App() {
  const App = styled.div`
    margin: 5%;
    padding: 3%;
  `;

  return (
    <App>
      <Hello />
      <Counter />
    </App>
  );
}

export default App;
