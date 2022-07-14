import { useState } from "react";
import CustomInput from "../../components/input/CustomInput";
import { StyledModal } from "../../components/layouts/StyledModal";
import { StyledModalWrapper } from "../../components/layouts/StyledModalWrapper";
import DatePicker from "react-date-picker";
import Button from "../../components/button/Button";
import Title from "../../components/title/Title";
import SelectImage from "../../components/selectImage/SelectImage";
import { productsApi } from "../../apis/fridgeventoryApi";
import ProductCategoryChooser from "./productCategoryChooser/ProductCategoryChooser";
import { Option } from "react-dropdown";
import { useUser } from "../../context/userContext/User.context";
import { useProduct } from "../../context/productContext/Product.context";
import Product, {
    parseProduct,
} from "../../context/productContext/Product.types";
import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import "./styles/datePicker/datePickerStyle.css";
import axios from "axios";
import { editProductById } from "../../services/product.services";

interface AddProductModalProps {
    isShown: boolean;
    closeModal: () => void;
    product?: Product;
}

export const isBlob = (obj: unknown): obj is Blob =>
    typeof obj === typeof new Blob();

const AddProductModal = ({
    isShown,
    closeModal,
    product,
}: AddProductModalProps) => {
    const [form, setForm] = useState({
        name: product?.name ?? "",
        amount: product?.amount ?? 1,
        productImage: product?.productImage ?? new Blob(),
        expiryDate: product?.expiryDate ?? new Date(),
        category: product?.category ?? "other",
    });
    const [submitMsg, setSubmitMsg] = useState("");
    const { token } = useUser();
    const { allProducts, setAllProducts } = useProduct();

    const handleChange = (e: any) => {
        setForm((prev) => ({
            ...prev,
            [e.target.id]: e.target.files ? e.target.files[0] : e.target.value,
        }));
    };

    const handleCategoryChange = (selectedCategory: Option) => {
        setForm((prev) => ({ ...prev, category: selectedCategory.value }));
    };

    const handleSubmit = async () => {
        setSubmitMsg("Submitted!");
        try {
            const formData = createFormData();
            console.log(formData);

            let productAfterSubmit;
            if (product) {
                const data = await editProductById(form, product._id, token!);
                productAfterSubmit = data;
            } else {
                const { data } = await createProductInServer(formData);
                productAfterSubmit = data;
            }

            updateProducts(productAfterSubmit);
            resetForm();
            closeModal();
        } catch (err: any) {
            setSubmitMsg(err.response.data || err.message);
        }
    };

    const resetForm = () => {
        setForm({
            name: "",
            amount: 1,
            productImage: new Blob(),
            expiryDate: new Date(),
            category: "other",
        });
    };

    const createFormData = () => {
        const formData = new FormData();
        Object.entries(form).forEach((entry) => {
            formData.append(
                entry[0],
                isBlob(entry[1]) ? entry[1] : entry[1]!.toString()
            );
        });
        return formData;
    };

    const updateProducts = (data: any) => {
        console.log(data);
        let products;
        if (allProducts?.find((product) => product._id === data._id)) {
            products = allProducts.map((product) => {
                if (product._id === data._id) {
                    return data;
                }
                return product;
            });
        } else {
            products = [...(allProducts ?? []), parseProduct(data)];
        }

        setAllProducts && allProducts && setAllProducts(products);
    };

    const createProductInServer = async (formData: FormData): Promise<any> => {
        return await productsApi.post("/addProduct", formData, {
            headers: {
                Authorization: token!,
                "Content-Type": "multipart/form-data",
            },
        });
    };

    return (
        <>
            {isShown && (
                <StyledModalWrapper onClick={closeModal}>
                    <StyledModal
                        height="45%"
                        width="40%"
                        justifyContent="flex-start"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <SelectImage
                            productImage={form?.productImage}
                            handleChange={handleChange}
                            inputLabel="Product Image"
                        ></SelectImage>

                        <CustomInput
                            id="name"
                            value={form.name}
                            onChange={handleChange}
                            inputLabel="Product Name"
                            required={true}
                        ></CustomInput>

                        <CustomInput
                            id="amount"
                            type="number"
                            value={form.amount}
                            onChange={handleChange}
                            inputLabel="Amount"
                            required={true}
                            min="1"
                        ></CustomInput>

                        <ProductCategoryChooser
                            onCategoryChange={handleCategoryChange}
                        ></ProductCategoryChooser>
                        <StyledFlexWrapper flexDirectionTablet="column">
                            <Title titleText="Expiry date"></Title>
                            <DatePicker
                                onChange={(date: Date) => {
                                    setForm((prev) => ({
                                        ...prev,
                                        expiryDate: date,
                                    }));
                                }}
                                value={form.expiryDate}
                            />
                        </StyledFlexWrapper>

                        <StyledFlexWrapper alignItems="flex-end">
                            <Button
                                buttonText="Add New Product"
                                onBtnClicked={handleSubmit}
                            ></Button>
                        </StyledFlexWrapper>
                    </StyledModal>
                </StyledModalWrapper>
            )}
        </>
    );
};

export default AddProductModal;
