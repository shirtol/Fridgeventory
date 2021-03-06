import { Router } from "express";
import {
    addProduct,
    getAllProducts,
    deleteProduct,
    shareProduct,
    unShareProduct,
    editProduct,
    getSpecificProduct,
} from "../controllers/product.controller.js";
import { upload } from "../services/aws.services.js";

export const productRouter = Router();

productRouter.get("/getAllProducts", getAllProducts);

productRouter.post("/addProduct", upload.single("productImage"), addProduct);

productRouter.delete("/deleteProduct/:productId", deleteProduct);

productRouter.put("/shareProduct/:hoodId", shareProduct);

productRouter.put("/unshareProduct/:hoodId", unShareProduct);

productRouter.put(
    "/editProduct/:productId",
    upload.single("productImage"),
    editProduct
);

productRouter.get("/getSpecificProduct/:productId", getSpecificProduct);
