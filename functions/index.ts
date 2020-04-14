import * as functions from "firebase-functions";
import * as express from "express";
import indexRouter from "./routes/index";

const app = express();

app.use("/", indexRouter);

exports.app = functions.region('asia-northeast1').https.onRequest(app);