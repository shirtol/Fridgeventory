import { Router } from "express";
import { productRouter } from "./product.routes.js";

export const authRouter = Router();

authRouter.use("/product", productRouter);
