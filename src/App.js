import React, { useRef } from 'react';
import './style.css';

export default function App() {
  const inputRef = useRef(null);
  const handleChange = () => {
    inputRef.current.focus();
    console.log(inputRef.current);
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleChange}>Event Handler</button>
    </div>
  );
}
