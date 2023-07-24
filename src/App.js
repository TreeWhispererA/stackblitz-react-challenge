import React, { useState } from 'react';
import './style.css';

export default function App() {
  //set the useState getter and setter
  const [title, setTitle] = useState('FreeCodeCamp');
  const handleChange = () => {
    setTitle("Let's Change the world wit our cutting-edge technology");
    setTimeout(() => {
      setTitle('FreeCodeCamp');
    }, 3000);
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{title}</h1>
      <button onClick={handleChange}>Change Title</button>
    </div>
  );
}
