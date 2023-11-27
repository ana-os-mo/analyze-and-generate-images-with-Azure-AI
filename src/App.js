import React, { useState } from 'react';
import { analyzeImage, generateImage } from './openai-image-analysis';
import './App.css';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [promptText, setPromptText] = useState('');
  const [description, setDescription] = useState('');
  const [generatedImageUrl, setGeneratedImageUrl] = useState('');

  const handleAnalyzeImage = async () => {
    const response = await analyzeImage(imageUrl);
    setDescription(response);
  };

  const handleGenerateImage = async () => {
    const response = await generateImage(promptText);
    setGeneratedImageUrl(response);
  };

  return (
    <div>
      <h1>Image Analyzer and Generator</h1>
      <div>
        <input
          type="text"
          value={imageUrl}
          onChange={e => setImageUrl(e.target.value)}
          placeholder="Enter image URL or describe an image"
        />
        <button className="analyze-button" onClick={handleAnalyzeImage}>Analyze Image</button>
      </div>
      <div>
        <input
          type="text"
          value={promptText}
          onChange={e => setPromptText(e.target.value)}
          placeholder="Describe an image"
        />
        <button className="create-button" onClick={handleGenerateImage}>Generate Image</button>
      </div>
      {description && <p>{description}</p>}
      {generatedImageUrl &&
        <div className="image-section">
          <img src={generatedImageUrl} alt="Generated" />
        </div>
      }
    </div>
  );
}

export default App;
