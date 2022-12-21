import { useState } from 'react';

/* Двустроннее связывание. Управляемый компонент. */
export const Input = () => {
  const [text, setText] = useState('');

  return (
    <input value={text} onChange={(event) => setText(event.target.value)} />
  );
};
