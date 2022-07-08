import { imageFileTypes } from "../constants/constants.js";
import multer from "multer";
import Aws from "aws-sdk";

const storage = multer.memoryStorage({
    destination: (req, file, cb) => {
        cb(null, "");
    },
});

const fileFilter = (req, file, cb) => {
    if (imageFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

export const upload = multer({ storage: storage, fileFilter: fileFilter });

export const s3 = new Aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
});
