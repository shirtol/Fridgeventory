import { useState } from "react";
import Button from "../../components/button/Button";
import CustomInput from "../../components/input/CustomInput";
import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import { StyledModal } from "../../components/layouts/StyledModal";
import { StyledModalWrapper } from "../../components/layouts/StyledModalWrapper";
import { useUser } from "../../context/userContext/User.context";

const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const { login } = useUser();

    const handleChange = (e: any) => {
        setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = async () => {
        try {
            await login!(form.email, form.password);
            setErrorMsg("");
        } catch (err: any) {
            setErrorMsg(err.response.data.message);
        }
    };

    return (
        <StyledModalWrapper>
            <StyledModal height="40%" width="30%">
                {/* <form> */}
                <StyledFlexWrapper
                    flexDirection="column"
                    paddingTop="3rem"
                    justifyContent="space-around"
                    height="100%"
                >
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
                    <StyledFlexWrapper>
                        <Button
                            buttonText="login"
                            onBtnClicked={handleSubmit}
                        ></Button>
                    </StyledFlexWrapper>
                </StyledFlexWrapper>
                <>{errorMsg}</>
                {/* </form> */}
            </StyledModal>
        </StyledModalWrapper>
    );
};

export default Login;
