import { useState } from "react";
import Button from "../../components/button/Button";
import CustomInput from "../../components/input/CustomInput";
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
            <StyledModal>
                {/* <form> */}
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
                <Button buttonText="login" onBtnClicked={handleSubmit}></Button>
                <>{errorMsg}</>
                {/* </form> */}
            </StyledModal>
        </StyledModalWrapper>
    );
};

export default Login;
