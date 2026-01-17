import express from "express";
import protect from "../middlewares/authMiddleware.js";
import { enhanceProfessionalSummary, enhanceJobDescription,uploadResume } from "../controllers/openaiController.js";


const openaiRouter = express.Router();

openaiRouter.post('/enhance-professional-summary', protect, enhanceProfessionalSummary);
openaiRouter.post('/enhance-job-description', protect, enhanceJobDescription);
openaiRouter.post('/upload-resume', protect, uploadResume);

export default openaiRouter;