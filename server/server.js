import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import router from "./routes/routes";
import constants from "./helpers/constants";
import morgan from "morgan";
import logger from "./database/config/winston";
const { OK } = constants.statusCode;
//express server
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("tiny", { stream: logger.stream }));
// app.use(router);

app.use(router);
//home route

app.get("/", (req, res) => {
  return res.status(OK).send({
    status: OK,
    message: "Welcome to Covid Figures Tracker API",
  });
});
//port definition
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(
    ` Covid Figures Web API listening on port ${port} in ${process.env.NODE_ENV} mode`
  );
});
export default app;
