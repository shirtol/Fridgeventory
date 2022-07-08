import { useState } from "react";
import CustomInput from "../../components/input/CustomInput";
import { StyledModal } from "../../components/layouts/StyledModal";
import { StyledModalWrapper } from "../../components/layouts/StyledModalWrapper";
import DatePicker from "react-date-picker";
import Button from "../../components/button/Button";
import Title from "../../components/title/Title";
import SelectImage from "../../components/selectImage/SelectImage";
import fridgeventoryApi from "../../apis/fridgeventoryApi";

interface AddProductModalProps {
    isShown: boolean;
    closeModal: () => void;
}

const AddProductModal = ({ isShown, closeModal }: AddProductModalProps) => {
    const [form, setForm] = useState({
        productName: "",
        amount: 1,
        productImage: "",
        expiryDate: new Date(),
    });
    const [submitMsg, setSubmitMsg] = useState("");
    const [startDate, setStartDate] = useState(new Date());

    const handleChange = (e: any) => {
        setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = async () => {
        try {
            await fridgeventoryApi.post("auth/product/addProduct", {
                body: form,
            });
            setForm({
                productName: "",
                amount: 1,
                productImage: "",
                expiryDate: new Date(),
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
                    <StyledModal>
                        <CustomInput
                            id="productName"
                            value={form.productName}
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
                        <SelectImage
                            productImage={form.productImage}
                            handleChange={handleChange}
                            inputLabel="Product Image"
                        ></SelectImage>
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
                    <>{submitMsg}</>
                </StyledModalWrapper>
            )}
        </>
    );
};

export default AddProductModal;
