import { Router } from "express";
import { userRouter } from "./user.routes.js";

export const indexRoute = Router();

indexRoute.use("/user", userRouter);
