import state from './../../../state.js'

function openAiConfig(prompt) {
  return {
    model: 'text-davinci-003',
    prompt: `${prompt}`,
    temperature: 0, // Higher values means the model will take more risks.
    max_tokens: 3000, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
    top_p: 1, // alternative to sampling with temperature, called nucleus sampling
    frequency_penalty: 0.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
    presence_penalty: 0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
  };
}
export default async function postHandler(req, res) {
  try {
    const prompt = req?.body?.prompt;
    if (!prompt) {
      throw new Error('Please send a json object in the post body, with a `prompt` key and a question - like `{prompt: "ask a question here"}`')
    }
    const response = await state.openai.createCompletion(openAiConfig(prompt));
    return res.status(200).send({
      bot: response.data.choices[0].text,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send(error.message || 'Something went wrong');
  }
}
