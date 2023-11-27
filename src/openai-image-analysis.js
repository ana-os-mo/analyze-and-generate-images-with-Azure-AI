import axios from 'axios';

const analyzeImage = async (imageUrl) => {
  const response = await axios.post('http://localhost:3001/api/analyzeImage', { imageUrl });
  return response.data;
};

const generateImage = async (promptText) => {
  const response = await axios.post('http://localhost:3001/api/generateImage', { promptText });
  return response.data.data;
};

export { analyzeImage, generateImage };
