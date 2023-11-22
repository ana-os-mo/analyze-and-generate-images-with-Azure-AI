require('dotenv').config();

const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
const openai = new OpenAI(process.env.OPENAI_API_KEY);

app.use(cors());
app.use(express.json());

app.post('/api/analyzeImage', async (req, res) => {
  const imageUrl = req.body.imageUrl;
  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "What’s in this image?" },
          {
            type: "image_url",
            image_url: imageUrl
          }
        ]
      }
    ]
  });

  res.json({
    imageUrl,
    description: response.data.choices[0].message.content
  });
});

app.post('/api/generateImage', async (req, res) => {
  const promptText = req.body.promptText;
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: promptText
  });

  res.json({
    imageUrl: response.data.image_url
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
