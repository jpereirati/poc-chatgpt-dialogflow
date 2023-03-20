export interface dialogflowResponse {
  text: text;
  responseType?: string;
  source: string;
}

interface text {
  text: [string];
  redactedText: [string];
}
