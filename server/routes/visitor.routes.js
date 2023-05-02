import express from "express";

import { createVisitor } from "../controllers/visitor.controller.js";

const router = express.Router();

router.route("/").post(createVisitor);

export default router;
