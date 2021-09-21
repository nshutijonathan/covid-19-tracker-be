import express from "express";
import Cases from "../controllers/cases";
import Loggers from "../controllers/loggers";
const router = express.Router();

router.get("/api/v1/cases", Cases.getCases);
router.get("/api/v1/cases/:id", Cases.getSingleCase);
router.get("/api/v1/logs", Loggers.getLogs);
export default router;
