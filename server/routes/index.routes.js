import { Router } from "express";
import { auth } from "../middlewares/auth.js";
import { authRouter } from "./auth.routes.js";
import { hoodRouter } from "./hood.routes.js";
import { userRouter } from "./user.routes.js";

export const indexRoute = Router();

indexRoute.use("/user", userRouter);
indexRoute.use("/hood", hoodRouter);
indexRoute.use("/auth", auth, authRouter);
