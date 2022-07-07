import { format } from "path";
import React, { ChangeEvent, useState } from "react";
import CustomInput from "../../components/input/CustomInput";
import { StyledModal } from "../../components/layouts/StyledModal";
import { StyledModalWrapper } from "../../components/layouts/StyledModalWrapper";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../../components/button/Button";

interface AddProductModalProps {
    isShown: boolean;
}

const AddProductModal = ({ isShown }: AddProductModalProps) => {
    const [form, setForm] = useState({
        productName: "",
        amount: 1,
    });
    const [submitMsg, setSubmitMsg] = useState("");
    const [startDate, setStartDate] = useState(new Date());

    const handleChange = (e: any) => {
        setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = () => {
        try {
            setForm({ productName: "", amount: 1 });
        } catch (err: any) {
            console.log(err.message);
            setSubmitMsg(err.response.data || err.message);
        }
    };

    //!TODO: Add upload image to this form
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
                        <DatePicker
                            selected={startDate}
                            onChange={(date: Date) => setStartDate(date)}
                        ></DatePicker>
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
