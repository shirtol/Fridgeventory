import { Product } from "../models/product/product.model.js";
import { s3 } from "../services/aws.services.js";
import { fetchAllProducts } from "../services/product.services.js";

export const getAllProducts = async (req, res) => {
    try {
        const allProduct = await fetchAllProducts(req.user._id);
        res.status(200).send(allProduct);
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
};

export const addProduct = (req, res) => {
    console.log(req.body);
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: req.file.originalname,
        Body: req.file.buffer,
        ACL: "public-read-write",
        ContentType: "image/jpeg",
    };

    s3.upload(params, async (err, data) => {
        if (err) {
            res.status(500).send({ message: err.message });
            return;
        }
        try {
            const product = new Product({
                name: req.body.name,
                expiryDate: req.body.expiryDate,
                amount: req.body.amount,
                productImage: data.Location,
                category: req.body.category,
                owner: req.user._id,
            });
            console.log("Product:  " + product);
            const result = await product.save();
            res.status(200).send(result);
        } catch (err) {
            console.log(err);
            res.send({ message: err.message });
        }
    });
};
