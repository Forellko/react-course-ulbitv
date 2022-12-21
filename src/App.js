import { useState } from 'react';
import { Counter } from './components/Counter';
import { Input } from './components/Input';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <Input />
    </div>
  );
}

export default App;
