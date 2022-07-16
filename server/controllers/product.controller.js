import { Product } from "../models/product/product.model.js";
import { s3 } from "../services/aws.services.js";
import {
    addProductToHood,
    removeProductFromHood,
} from "../services/hood.services.js";
import {
    fetchAllProducts,
    fetchProductAndDelete,
    updateProductIsShared,
    editProductById,
    getProductById,
} from "../services/product.services.js";
import FridgeventoryError from "../utils/errorHandling.js";

export const getAllProducts = async (req, res) => {
    try {
        const allProduct = await fetchAllProducts(req.user._id);
        res.status(200).send(allProduct);
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
};

export const addProduct = (req, res) => {
    if (!req.file) {
        res.status(404).send({ message: "Image not found" });
        return;
    }
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
        const productAfterUpdating = await updateProductIsShared(
            req.body.productId,
            true
        );
        return res
            .status(200)
            .send({ hoodAfterUpdating, productAfterUpdating });
    } catch (err) {
        const parsed = JSON.parse(err.message);
        return res.status(parsed.statusCode).send(parsed);
    }
};

export const unShareProduct = async (req, res) => {
    try {
        const hoodAfterUpdating = await removeProductFromHood(
            req.body.productId,
            req.params.hoodId
        );
        const productAfterUpdating = await updateProductIsShared(
            req.body.productId,
            false
        );
        return res
            .status(200)
            .send({ hoodAfterUpdating, productAfterUpdating });
    } catch (err) {
        console.error(err);
        const parsed = JSON.parse(err.message);
        return res.status(parsed.statusCode).send(parsed);
    }
};

export const editProduct = async (req, res) => {
    try {
        if (req.file) {
            await fetchProductAndDelete(
                req.params.productId,
                req.user._id.valueOf()
            );
            addProduct(req, res);
        } else {
            const productAfterEdit = await editProductById(
                req.body,
                req.params.productId
            );
            return res.status(200).send(productAfterEdit);
        }
    } catch (err) {
        const parsed = JSON.parse(err.message);
        return res.status(parsed.statusCode).send(parsed);
    }
};

export const getSpecificProduct = async (req, res) => {
    try {
        const product = await getProductById(req.params.productId);
        return res.status(200).send(product);
    } catch (err) {
        const parsed = JSON.parse(err.message);
        return res.status(parsed.statusCode).send(parsed);
    }
};
