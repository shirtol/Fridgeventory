import { Router } from "express";
import { registerUser, loginUser } from "../controllers/user.controllers.js";

export const userRouter = Router();

userRouter.post("/register", registerUser);

userRouter.post("/login", loginUser);
