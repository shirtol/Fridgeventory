import mongoose from "mongoose";
import { productSchema } from "./product.schema.js";

export const Product = mongoose.model("product", productSchema);
