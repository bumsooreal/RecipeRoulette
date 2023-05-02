const { Configuration, OpenAIApi } = require("openai");

const OPENAI_API_KEY = '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'

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function call(foodName) {
	const completion = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: `Give me the ingredients, recipe, and nutrition data for ${foodName}. Separate the list of ingredients from the recipe instructions. The response must be a valid JSON object. The resulting JSON object should be in this format: [{"Ingredients":string[],"Recipe":string, "Nutrition":string[]}] without using any newlines and without any filler messages prior to what was asked for`,  
		max_tokens: 1500
	},{
		headers: {
			'Content-Type': 'application/json'
		}
	});
	//console.log(completion.data.choices[0]);
	let str = completion.data.choices[0].text
	str = str.replace(`
`, "")
	str = str.replace(`\n`,"")
	str = str.replace(`	`, "")
	let i = str.indexOf("[")
	if (i > 0) {
		str = str.slice(i, str.length)
	}
	return str;
}

export default call