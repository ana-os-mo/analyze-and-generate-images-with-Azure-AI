import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  return (
    <div>
      <h1>Image Analyzer and Generator</h1>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter image URL or describe an image"
      />
      <button className="analyze-button">Analyze Image</button>
      <button className="create-button">Generate Image</button>
    </div>
  );
}

export default App;
