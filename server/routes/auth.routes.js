import { Router } from "express";
import { getHoodById, joinToHood } from "../controllers/hood.controller.js";
import { logout, getUserDetails } from "../controllers/user.controllers.js";
import { productRouter } from "./product.routes.js";

export const authRouter = Router();

authRouter.use("/product", productRouter);

authRouter.post("/user/logout", logout);

authRouter.get("/user/getUserDetails", getUserDetails);

authRouter.get("/hood/getMyHood/:hoodId", getHoodById);

authRouter.put("/hood/joinHood", joinToHood);
