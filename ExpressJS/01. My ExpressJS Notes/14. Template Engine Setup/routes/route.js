import express from "express";
import { homeController } from "../controller/homeController.js";
import { aboutController } from "../controller/aboutController.js";

const router = express.Router();
router.get("/home", homeController);
router.get("/about", aboutController);
export default router;
