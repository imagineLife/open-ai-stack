import state from './../../../state.js'

export default async function postHandler(req, res) {
  try {
    const prompt = req?.body?.prompt;
    if (!prompt) {
      throw new Error('Please send a json object in the post body, with a `prompt` key and a question - like `{prompt: "ask a question here"}`')
    }
    const response = await state.openai.library.createCompletion(state.openAi.configs.chat(prompt));
    return res.status(200).send({
      bot: response.data.choices[0].text,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send(error.message || 'Something went wrong');
  }
}
