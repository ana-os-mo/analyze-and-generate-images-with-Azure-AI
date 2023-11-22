import React, { useState } from 'react';
import analyzeImage from './openai-image-analysis';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [analysis, setAnalysis] = useState(null);

  const handleAnalyzeImage = async () => {
    const data = await analyzeImage(input);
    setAnalysis(data);
  };

  return (
    <div>
      <h1>Image Analyzer and Generator</h1>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter image URL or describe an image"
      />
      <button className="analyze-button" onClick={handleAnalyzeImage}>Analyze Image</button>
      <button className="create-button">Generate Image</button>
      {analysis && <div>{analysis}</div>}
    </div>
  );
}

export default App;
