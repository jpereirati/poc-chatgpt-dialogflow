import { Request, Response } from "express";

import {
  formatResponseForDialogflowCX,
  formatResponseForDialogflowES,
  textGeneration,
} from "../../utils";

const cx = async (req: any, res: any) => {
  const { text } = req.body;

  console.log("A new request came...");
  console.log(new Date());
  let result = await textGeneration(text);
 
  const response = formatResponseForDialogflowCX([result.response])

  res.send(response);
};

const es = async (req: any, res: any) => {
  const { queryResult } = req.body;
  const text = queryResult.queryText;

  console.log("A new request came...");
  console.log(new Date());

  let result = await textGeneration(text);
  res.send(formatResponseForDialogflowES([result.response]));
};

export { cx, es };
