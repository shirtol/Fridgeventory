import { useState } from "react";
import CustomInput from "../../components/input/CustomInput";
import { StyledModal } from "../../components/layouts/StyledModal";
import { StyledModalWrapper } from "../../components/layouts/StyledModalWrapper";
import DatePicker from "react-date-picker";
import Button from "../../components/button/Button";
import Title from "../../components/title/Title";
import SelectImage from "../../components/selectImage/SelectImage";
import fridgeventoryApi, {
    postImage,
    productsApi,
} from "../../apis/fridgeventoryApi";
import ProductCategoryChooser from "./productCategoryChooser/ProductCategoryChooser";
import { Option } from "react-dropdown";
import { useUser } from "../../context/userContext/User.context";
import { useProduct } from "../../context/productContext/Product.context";
import Product from "../../context/productContext/Product.types";

interface AddProductModalProps {
    isShown: boolean;
    closeModal: () => void;
}

const isBlob = (obj: unknown): obj is Blob => typeof obj === typeof new Blob();

const AddProductModal = ({ isShown, closeModal }: AddProductModalProps) => {
    const [form, setForm] = useState({
        name: "",
        amount: 1,
        productImage: new Blob(),
        expiryDate: new Date(),
        category: "other",
    });
    const [submitMsg, setSubmitMsg] = useState("");
    const [startDate, setStartDate] = useState(new Date());
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
            const formData = new FormData();
            Object.entries(form).forEach((entry) => {
                formData.append(
                    entry[0],
                    isBlob(entry[1]) ? entry[1] : entry[1].toString()
                );
            });

            // setAllProducts((prev) => )

            const { data } = await productsApi.post("/addProduct", formData, {
                headers: {
                    Authorization: token!,
                    "Content-Type": "multipart/form-data",
                },
            });

            setAllProducts &&
                allProducts &&
                setAllProducts([...allProducts, data as Product]);

            setForm({
                name: "",
                amount: 1,
                productImage: new Blob(),
                expiryDate: new Date(),
                category: "other",
            });
            closeModal();
        } catch (err: any) {
            setSubmitMsg(err.response.data || err.message);
        }
    };

    return (
        <>
            {isShown && (
                <StyledModalWrapper>
                    <StyledModal height="85%">
                        <CustomInput
                            id="name"
                            value={form.name}
                            onChange={handleChange}
                            inputLabel="Product Name"
                            required={true}
                        ></CustomInput>
                        <SelectImage
                            productImage={form.productImage}
                            handleChange={handleChange}
                            inputLabel="Product Image"
                        ></SelectImage>
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

                        <Button
                            buttonText="Add New Product"
                            onBtnClicked={handleSubmit}
                        ></Button>
                    </StyledModal>
                    {/* <>{submitMsg}</> */}
                </StyledModalWrapper>
            )}
        </>
    );
};

export default AddProductModal;
