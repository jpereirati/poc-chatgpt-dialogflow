import express from "express";

import dialogFlowRouter from "./dialogflow";

const app = express.Router();

app.use("/dialogflow", dialogFlowRouter);

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  next();
});

export default app;
