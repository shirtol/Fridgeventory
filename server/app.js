import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { indexRoute } from "./routes/index.routes.js";

export const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicPath = path.join(__dirname, "../client/build");

app.use(express.json());
app.use(cors());

app.use("/api", indexRoute);

app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});
