const { Configuration, OpenAIApi } = require("openai");

const OPENAI_API_KEY = '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'

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function call(foodName) {
	const completion = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: `Give me the ingredients, recipe, and nutrition results for ${foodName}, but write your response in a valid json format where all the values are strings and each element within lists are divided using ";"`, 
		max_tokens: 1000
	});
	//console.log(completion.data.choices[0]);
	return completion.data.choices[0].text;
}

export default call