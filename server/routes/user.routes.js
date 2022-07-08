import { Router } from "express";
import {
    registerUser,
    loginUser,
    logout,
} from "../controllers/user.controllers.js";

export const userRouter = Router();

userRouter.post("/register", registerUser);

userRouter.post("/login", loginUser);
