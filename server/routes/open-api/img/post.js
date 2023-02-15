import state from './../../../state.js';

export default async function postHandler(req, res) {
  try {
    const prompt = req?.body?.prompt;
    if (!prompt) {
      throw new Error(
        'Please send a json object in the post body, with a `prompt` key and an image description, something like `{prompt: "a lizard sitting on a couch drinking a cup of coffee"}`'
      );
    }

    const aiResponse = await state.openAi.library.createImage(state.openAi.configs.img(prompt));
    
    return res.status(200).json(aiResponse.data);
  } catch (error) {
    console.error(error);
    return res.status(500).send(error.message || 'Something went wrong');
  }
}
