// import express from "express";
// import {
//   login,
//   logout,
//   register,
//   updateProfile,
// } from "../controllers/user.controller.js";
// import isAuthenticated from "../middleware/isAuthenticated.js";
// import { singleUpload } from "../middleware/multer.js";

// const router = express.Router();

// router.route("/register").post(singleUpload, register);
// router.route("/login").post(login);
// router.route("/logout").get(logout);
// router
//   .route("/profile/update")
//   .post(isAuthenticated, singleUpload, updateProfile);

// export default router;

import express from "express";
import {
  deleteAccount,
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/user.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { singleUpload } from "../middleware/multer.js";

const router = express.Router();

// User registration route with file upload (single file)
router.route("/register").post(singleUpload, register);

// Login route
router.route("/login").post(login);

// Logout route
router.route("/logout").get(logout);

// deleteAccount
router.route("/delete").delete(isAuthenticated, deleteAccount);

// Profile update route, protected by authentication middleware and allowing file upload
router
  .route("/profile/update")
  .post(isAuthenticated, singleUpload, updateProfile);

export default router;
