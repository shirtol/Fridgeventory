import { Router } from "express";
import {
    createHood,
    getHoodById,
    joinHood,
} from "../controllers/hood.controller.js";
import { logout } from "../controllers/user.controllers.js";
import { productRouter } from "./product.routes.js";

export const authRouter = Router();

authRouter.use("/product", productRouter);

authRouter.post("/user/logout", logout);

authRouter.get("/hood/getMyHood/:hoodId", getHoodById);

authRouter.put("/hood/joinHood", joinHood);

authRouter.post("/hood/createHood", createHood);
