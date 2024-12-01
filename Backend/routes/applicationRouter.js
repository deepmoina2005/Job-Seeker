import express from "express";
import { employerGetAllApplications, jobSeekerDeleteApplications, jobSeekerGetAllApplications, postApplication } from "../controllers/applicationControllers.js"
import { isAuthorized } from "../middlewares/auth.js";

const router = express.Router();

router.post("/post", isAuthorized, postApplication);
router.get("/employer/getall", isAuthorized, employerGetAllApplications);
router.get("/jobseeker/getall", isAuthorized, jobSeekerGetAllApplications);
router.delete("/delete/:id", isAuthorized, jobSeekerDeleteApplications);

export default router;