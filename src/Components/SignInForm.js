import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, {useState, useEffect} from "react";
import Validation from "../Validation/validation";
import APISignInRequest from "../API/SignInRequest"

function SignInForm(props) {

    let name;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [passwordErrorMessage, setPasswordMessage] = useState("");

    const [emailHasError, setEmailErrorFlag] = useState(false);
    const [passwordHasError, setPasswordErrorFlag] = useState(false);

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const SignInHandleChange = async () => {
        const validate = Validation(email, password)
        console.log(validate)
        try {
            const signInResult = await APISignInRequest(email, password);
            console.log(signInResult.status)
            if (signInResult.status === 200) {
                name = signInResult.data.user.name
                props.func({ status: true, name })
                return
            }

        } catch (e) {
            console.error(e)
        }
        const cleanUp = () => {
            setEmailErrorFlag(false);
            setPasswordErrorFlag(false);
            setEmailErrorMessage('');
            setPasswordMessage('');
        }
        cleanUp()
        if (validate.status === "Fail") {
            if (validate.field === 'email') {
                setEmailErrorFlag(true);
                setEmailErrorMessage(validate.errorMessage);
            }
            if (validate.field === 'password') {
                setPasswordErrorFlag(true);
                setPasswordMessage(validate.errorMessage);
            }
        }
    }
    return (
        <div className="main-input-container">
            <div className="input-container">
                <TextField
                    error={emailHasError}
                    id="outlined-basic1"
                    label="Email"
                    type="email"
                    placeholder="Email"
                    variant="outlined"
                    name="emailInput"
                    onChange={(e) => handleChangeEmail(e)}
                    helperText={emailErrorMessage}

                />
            </div>
            <div className="input-container">
                <TextField
                    error={passwordHasError}
                    id="outlined-basic2"
                    label="Password"
                    variant="outlined"
                    type="password"
                    placeholder="Email"
                    name="emailInput"
                    onChange={(e) => handleChangePassword(e)}
                    helperText={passwordErrorMessage}
                />
            </div>
            <div className="button-container">
                <Button type="submit" onClick={SignInHandleChange} variant="contained" color="primary"
                        href="#contained-buttons">
                    Send
                </Button>
            </div>
        </div>


    )
}

export default SignInForm;