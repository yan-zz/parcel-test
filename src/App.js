import React from 'react';
import '../public/styles.css';
import { Hello } from './Hello';
import { Counter } from './Counter';

export function App() {
  return (
    <div className="app">
      <Hello />
      <Counter />
    </div>
  );
}

export default App;
