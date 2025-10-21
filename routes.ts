import express from "express";
import { getSpinResultsHandler } from "./controllers/SpinController";

const routes = express.Router();

routes.post("/", getSpinResultsHandler);

export default routes;
