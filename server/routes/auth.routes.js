import { Router } from "express";
import { logout } from "../controllers/user.controllers.js";
import { productRouter } from "./product.routes.js";

export const authRouter = Router();

authRouter.use("/product", productRouter);

authRouter.post("/user/logout", logout);
