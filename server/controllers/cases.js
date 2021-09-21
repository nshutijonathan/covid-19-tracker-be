import models from "../database/models";
import constants from "../helpers/constants";
const { OK, BAD_REQUEST, CREATED, CONFLICT, NOT_FOUND } = constants.statusCode;
const { cases } = models;

class Cases {
  static async getCases(req, res) {
    try {
      const casesList = await cases.findAll({ limit: 20 });
      return res.status(OK).json({
        message: "Cases fetched successfully",
        status: 200,
        data: casesList,
        total: casesList.length,
      });
    } catch (error) {
      console.log("error", error);
      return error.message;
    }
  }
}
export default Cases;
