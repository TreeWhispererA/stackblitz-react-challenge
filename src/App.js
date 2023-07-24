import React, { useReducer } from 'react';
import './style.css';

const initialState = { text: 'FreeCodeCamp', count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'change-text':
      return { ...state, text: 'FCC' };
    case 'increase-count':
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{state.text} CodeCamp</h1>
      <button
        onClick={() => {
          dispatch({ type: 'change-text' });
        }}
      >
        Change the text
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'increase-count' });
        }}
      >
        Increase Count
      </button>
      <h2>{state.count}</h2>
    </div>
  );
}
