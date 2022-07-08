import "dotenv/config";
import "./server/db/mongoose.js";
import { app } from "./server/app.js";

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server is up and running on port " + PORT));
