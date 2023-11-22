const { app } = require('@azure/functions');
const OpenAI = require('openai');

const openai = new OpenAI(process.env.OPENAI_API_KEY);

app.http('analyzeImage', {
  methods: ['POST'],
  authLevel: 'anonymous',
  handler: async (request, context) => {
    context.log(`Http function processed request for url "${request.url}"`);

    const imageUrl = request.query.get('imageUrl') || await request.text();

    if (!imageUrl) {
      return {
        status: 400,
        body: 'Please provide an image URL'
      };
    }

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4-vision-preview",
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: "What’s in this image?" },
              { type: "image_url", image_url: { url: imageUrl } }
            ]
          }
        ]
    });

    return { body: response.choices[0].message.content };
    } catch (error) {
      context.log(error);
      return {
        status: 500,
        body: 'An error occurred while analyzing the image'
      };
    }
  }
});
