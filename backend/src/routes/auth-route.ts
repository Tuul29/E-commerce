import { Router } from "express";
import {
  login,
  signup,
  currentUser,
  verifyOtp,
  verifyPassword,
  forgetPassword,
  updateUser,
} from "../controllers/auth-controller";
import { authentication } from "../middlewares/authentication";

const router = Router();

router.route("/current-user").get(authentication, currentUser); // /api/v1/auth
router.route("/verify-password").post(verifyPassword); //  /api/v1/auth/verify-password
router.route("/forget-password").post(forgetPassword);
router.route("/verify-otp").post(verifyOtp);
router.route("/signup").post(signup); // /api/v1/auth/signup
router.route("/login").post(login);
router.route("/user/:id").put(updateUser);

export default router;
