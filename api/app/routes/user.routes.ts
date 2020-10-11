import { Router } from "express";
import { user } from "../controllers/user.controller";

const router = Router();
router.post("/user", user);


export default router;

