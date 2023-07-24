import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [value, setValue] = useState('');
  useEffect(() => {
    console.log('value changed', value);
  }, [value]);
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
