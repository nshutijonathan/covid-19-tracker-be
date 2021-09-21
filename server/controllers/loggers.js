import fs from "fs";
import appRoot from "app-root-path";
import constants from "../helpers/constants";
const { OK } = constants.statusCode;
const Loggers = {
  async getLogs(req, res) {
    fs.readFile(`${appRoot}/logs/app.log`, "utf8", (err, data) => {
      if (err) throw err;
      return res.status(OK).send({
        message: "Logs retrieved successfully",
        logs: data,
      });
    });
  },
};
export default Loggers;

