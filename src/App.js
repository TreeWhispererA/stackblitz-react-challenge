import React, { useRef } from 'react';
import './style.css';

export default function App() {
  const inputRef = useRef(null);
  const handleChange = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleChange}>Event Handler</button>
    </div>
  );
}
