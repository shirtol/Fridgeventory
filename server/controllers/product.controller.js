import { Product } from "../models/product/product.model.js";
import { s3 } from "../services/aws.services.js";
import { addProductToHood } from "../services/hood.services.js";
import {
    fetchAllProducts,
    fetchProductAndDelete,
} from "../services/product.services.js";

export const getAllProducts = async (req, res) => {
    try {
        const allProduct = await fetchAllProducts(req.user._id);
        res.status(200).send(allProduct);
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
};

export const addProduct = (req, res) => {
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
            const result = await product.save();
            res.status(200).send(result);
        } catch (err) {
            res.send({ message: err.message });
        }
    });
};

export const deleteProduct = async (req, res) => {
    try {
        const product = await fetchProductAndDelete(
            req.params.productId,
            req.user._id.valueOf()
        );

        return res.status(200).send(product);
    } catch (err) {
        const parsed = JSON.parse(err.message);
        return res.status(parsed.statusCode).send(parsed);
    }
};

export const shareProduct = async (req, res) => {
    try {
        const hoodAfterUpdating = await addProductToHood(
            req.body.productId,
            req.params.hoodId
        );
        return res.status(200).send(hoodAfterUpdating);
    } catch (err) {
        const parsed = JSON.parse(err.message);
        return res.status(parsed.statusCode).send(parsed);
    }
};
