import { Router } from "express";
import {loginUser, logoutUser, refreshAccessToken, registerUser,getUserChannelProfile, changeCurrentPassword, getCurrentUser, updateAccountDetails, updateUserAvatar, updateUserCoverImage, getWatchHistory} from "../controllers/user.controller.js";

import {upload} from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/register").post(upload.fields([
  {
    name:"avatar",
    maxCount:1
  },
  {
    name:"coverImage",
    maxCount:1,
  }
]),
  registerUser)

router.route("/login").post(loginUser)

//secured routes

router.route("/logout").post(verifyJWT,logoutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/getchannel-profile").get(verifyJWT,getUserChannelProfile);
router.route("/change-password").patch(verifyJWT,changeCurrentPassword);
router.route("/getcurrent-user").get(verifyJWT,getCurrentUser);
router.route("/updatedetails").patch(verifyJWT,updateAccountDetails);
router.route("/update-avatar").patch(verifyJWT,upload.single("avatar"),updateUserAvatar);
router.route("/update-coverImage").patch(verifyJWT,upload.single("coverImage"),updateUserCoverImage);
router.route("/getwatch-history").get(verifyJWT,getWatchHistory);
export default router;