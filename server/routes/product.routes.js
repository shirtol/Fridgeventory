import { Router } from "express";
import {
    addProduct,
    getAllProducts,
} from "../controllers/product.controller.js";
import { upload } from "../services/aws.services.js";

export const productRouter = Router();

productRouter.get("/getAllProducts", getAllProducts);

productRouter.post("/addProduct", upload.single("productImage"), addProduct);
