import express from "express";
import { cx, es } from "./controller";

const dialogFlowRouter = express.Router().post("/cx", cx).post("/es", es);

export default dialogFlowRouter;
