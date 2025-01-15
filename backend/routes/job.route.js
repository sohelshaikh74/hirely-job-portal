import express from "express";
// import isAuthenticated from "../middlewares/isAuthenticated.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import {
  getAdminJobs,
  getAllJobs,
  getJobById,
  postJob,
} from "../controllers/job.controller.js";

const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
// router.route("/get").get(isAuthenticated, getAllJobs);
router.route("/get").get(getAllJobs);
// delete begin Job
router.route("/get").get(getAllJobs);
// delete end Job

router.route("/getadminjobs").get(isAuthenticated, getAdminJobs);
// router.route("/get/:id").get(isAuthenticated, getJobById);
router.route("/get/:id").get(getJobById);

export default router;
