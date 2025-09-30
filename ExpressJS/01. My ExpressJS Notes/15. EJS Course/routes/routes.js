import express from "express";
import { homeController } from "../controller/homeController.js";
import { aboutController } from "../controller/aboutController.js";
import { learn_variables } from "../controller/learn_variables.js";
import { conditionalStatement } from "../controller/conditionalStatement.js";
import { loops } from "../controller/loops.js";

const router = express.Router();
router.get("/home", homeController);
router.get("/about", aboutController);
router.get("/learn_variables", learn_variables);
router.get("/conditional_statement", conditionalStatement);
router.get("/loops", loops);
export default router;
