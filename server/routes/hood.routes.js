import { Router } from "express";
import { getAllHoods } from "../controllers/hood.controller.js";

export const hoodRouter = Router();

hoodRouter.get("/getAllHoods", getAllHoods);
