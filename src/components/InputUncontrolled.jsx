import { useEffect, useRef } from 'react';

// Неуправляемый компонент
const InputUncontrolled = () => {
  const ref = useRef();

  return (
    <div>
      <input ref={ref} type="text"></input>
    </div>
  );
};
// Неуправляемый компонент
export default InputUncontrolled;
