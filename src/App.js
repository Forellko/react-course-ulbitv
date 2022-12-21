import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <hr />
      <input value={text} onChange={(event) => setText(event.target.value)} />
    </div>
  );
}

export default App;
