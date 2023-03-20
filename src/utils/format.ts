import { dialogflowResponse } from "../types/dialogflow";

export function formatResponseForDialogflowES(texts: string[]) {
  let messages: dialogflowResponse[] = [];

  texts.forEach((text) => {
    messages.push({
      text: {
        text: [text],
        redactedText: [text],
      },
      source: "webhook",
    });
  });

  let responseData = {
    fulfillmentMessages: messages,
    source: "webhook",
  };

  return responseData;
}

export function formatResponseForDialogflowCX(texts: string[]) {
  let messages: dialogflowResponse[] = [];

  texts.forEach((text) => {
    messages.push({
      text: {
        text: [text],
        redactedText: [text],
      },
      responseType: "HANDLER_PROMPT",
      source: "VIRTUAL_AGENT",
    });
  });

  let responseData = {
    fulfillment_response: {
      messages: messages,
    },
  };

  return responseData;
}
