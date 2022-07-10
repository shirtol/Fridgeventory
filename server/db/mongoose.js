import mongoose from "mongoose";
import "dotenv/config";

const URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.qa71dxy.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(URL, (err, mongoConnectionInstance) => {
    if (err) throw Error("Mongoose Connection Error! " + err);
    if (!process.env.NODE_ENV) {
        const { host, port, name } = mongoConnectionInstance;
    }
});
