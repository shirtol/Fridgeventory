import { Router } from "express";
import { productRouter } from "./product.routes.js";
import { userRouter } from "./user.routes.js";

export const indexRoute = Router();

indexRoute.use("/user", userRouter);
indexRoute.use("/product", productRouter);
