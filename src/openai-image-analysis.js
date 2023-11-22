import axios from 'axios';

const analyzeImage = async (imageUrl) => {
  const response = await axios.post('https://api.openai.com/v1/davinci/completions', {
    prompt: `Describe the image at the following URL: ${imageUrl}`,
    max_tokens: 60
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_KEY}`
    }
  });

  return response.data.choices[0].text;
};

export default analyzeImage;
