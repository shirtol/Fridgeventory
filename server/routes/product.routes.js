import { Router } from "express";
import {
    addProduct,
    getAllProducts,
    deleteProduct,
    shareProduct,
    editProduct,
} from "../controllers/product.controller.js";
import { upload } from "../services/aws.services.js";

export const productRouter = Router();

productRouter.get("/getAllProducts", getAllProducts);

productRouter.post("/addProduct", upload.single("productImage"), addProduct);

productRouter.delete("/deleteProduct/:productId", deleteProduct);

productRouter.put("/shareProduct/:hoodId", shareProduct);

productRouter.put("/editProduct/:productId", editProduct);
