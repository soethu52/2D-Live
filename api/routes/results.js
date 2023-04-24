import express from "express";
import { insertValue } from "../controllers/results.js";
const  router = express.Router();

router.get("/", insertValue);
export default router;