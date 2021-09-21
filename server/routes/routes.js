import express from "express";
import Cases from "../controllers/cases";
const router = express.Router();

router.get("/api/v1/cases", Cases.getCases);
export default router;
