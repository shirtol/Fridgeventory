import React, { useState } from "react";
import CustomInput from "../../components/input/CustomInput";
import { User } from "../../context/userContext/User.type.js";
import { StyledModal } from "../../components/layouts/StyledModal";
import { StyledModalWrapper } from "../../components/layouts/StyledModalWrapper";
import Button from "../../components/button/Button";
import { useUser } from "../../context/userContext/User.context";

const Registration = () => {
    const { register, currentUser } = useUser();
    const [form, setForm] = useState<User>({
        name: "",
        email: "",
        password: "",
    });
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (e: any) => {
        setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleConfirmPassword = (e: any) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async () => {
        if (formNotValidated()) return;

        try {
            await register!(form);
            setErrorMsg("");
        } catch (err: any) {
            setErrorMsg(err.response.data.message);
        }
    };

    const formNotValidated = () => {
        if (confirmPassword !== form.password) {
            setErrorMsg("Passwords do NOT match");
            return true;
        }
        if (form.password.length < 8) {
            setErrorMsg(
                "Invalid password. Password length must be at least 8 characters"
            );
            return true;
        }
        return false;
    };

    return (
        <StyledModalWrapper>
            <StyledModal>
                <CustomInput
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    inputLabel="name"
                    required={true}
                ></CustomInput>
                <CustomInput
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    inputLabel="email"
                    required={true}
                ></CustomInput>
                <CustomInput
                    id="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    inputLabel="password"
                    required={true}
                ></CustomInput>
                <CustomInput
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPassword}
                    inputLabel="confirm password"
                    required={true}
                ></CustomInput>
                <Button
                    buttonText="register"
                    onBtnClicked={handleSubmit}
                ></Button>
                <>{errorMsg}</>
            </StyledModal>
        </StyledModalWrapper>
    );
};

export default Registration;
