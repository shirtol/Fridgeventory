import React, { useState } from "react";
import CustomInput from "../../components/input/CustomInput";
import { User } from "../../context/userContext/User.type.js";
import { StyledModal } from "../../components/layouts/StyledModal";
import { StyledModalWrapper } from "../../components/layouts/StyledModalWrapper";
import Button from "../../components/button/Button";
import { useUser } from "../../context/userContext/User.context";
import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import HouseSpinner from "../../components/spinner/HouseSpinner";

const Registration = () => {
    const { register } = useUser();
    const [form, setForm] = useState<User>({
        name: "",
        email: "",
        password: "",
    });
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e: any) => {
        setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleConfirmPassword = (e: any) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async () => {
        if (formNotValidated()) return;

        setIsLoading(true);

        try {
            await register!(form);
            setErrorMsg("");
        } catch (err: any) {
            setErrorMsg(err.response.data.message);
        }

        setIsLoading(false);
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

    return isLoading ? (
        <HouseSpinner isShown={isLoading} />
    ) : (
        <StyledModalWrapper isAbove={false}>
            <StyledModal>
                {/* <form> */}
                <StyledFlexWrapper
                    flexDirection="column"
                    paddingTop="3rem"
                    justifyContent="space-around"
                    height="100%"
                    paddingBottom="2rem"
                >
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
                        type={showPassword ? "text" : "password"}
                        value={form.password}
                        onChange={handleChange}
                        inputLabel="password"
                        required={true}
                        isPassword
                        showPassword={showPassword}
                        toggleShowPassword={() =>
                            setShowPassword(!showPassword)
                        }
                    ></CustomInput>
                    <CustomInput
                        type={showPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={handleConfirmPassword}
                        inputLabel="confirm password"
                        required={true}
                        showPassword={showPassword}
                    ></CustomInput>
                    <StyledFlexWrapper>
                        <Button
                            buttonText="register"
                            onBtnClicked={handleSubmit}
                        ></Button>
                    </StyledFlexWrapper>
                    <>{errorMsg}</>
                    {/* </form> */}
                </StyledFlexWrapper>
            </StyledModal>
        </StyledModalWrapper>
    );
};

export default Registration;
