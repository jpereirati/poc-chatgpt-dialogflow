import { Configuration, OpenAIApi } from "openai";
import { openai } from "..";

async function textGeneration(prompt: string) {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-002-render-sha",
      prompt
    });
    
    return {
      status: 1,
      response: `${response.data.choices[0].text}`,
    };
  } catch (error) {
    return {
      status: 0,
      response: "",
    };
  }
}

export { textGeneration };
