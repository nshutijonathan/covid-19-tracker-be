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
  static async getSingleCase(req, res) {
    try {
      const { id } = req.params;
      const SingleCase = await cases.findOne({
        where: { id },
      });
      if (!SingleCase) {
        return res.status(NOT_FOUND).json({
          status: NOT_FOUND,
          message: `case with id ${req.params.id} not found `,
        });
      }
      return res.status(OK).json({
        status: 200,
        message: `case with id ${id} fetched succcessfully`,
        case: SingleCase,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
export default Cases;
