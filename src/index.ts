import express from "express";
import dotenv from "dotenv";
import router from "./routes";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
);

const app = express();

const PORT = process.env.PORT || 80;

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is up and running at ${PORT}`);
});

export { openai };
