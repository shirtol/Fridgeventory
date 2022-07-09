import mongoose from "mongoose";
import { hoodSchema } from "./hood.schema.js";

export const Hood = mongoose.model("hood", hoodSchema);
