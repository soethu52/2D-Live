import express from "express";
const  router = express.Router();
import { insertValue } from "../controllers/results.js";

router.post("/", insertValue);
export default router;