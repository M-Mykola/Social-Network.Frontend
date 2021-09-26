import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, {useState, useEffect} from "react";
import {isInvalidPassword, isInvalidEmail} from "../Validation/validation";
import APISignInRequest from "../API/SignInRequest"



function SignInForm(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [passwordErrorMessage, setPasswordMessage] = useState("");
    const [emailHasError, setEmailErrorFlag] = useState(false);
    const [passwordHasError, setPasswordErrorFlag] = useState(false);
    const [emailDisableButton, setEmailDisableButton] = useState(true)
    const [passwordDisableButton, setPasswordDisableButton] = useState(true)

    const HandleChangeEmail = (event) => {
        const emailValidation = isInvalidEmail(event.target.value)
        if (email && emailValidation) {
            setEmailErrorFlag(true);
            setEmailErrorMessage(emailValidation.errorMessage);
        } else {
            setEmailErrorMessage('');
            setEmailErrorFlag(false);
        }
        setEmail(event.target.value);
    }
    const handleChangePassword = (event) => {
        const passwordValidation = isInvalidPassword(event.target.value)
        if (password && passwordValidation) {
            setPasswordErrorFlag(true);
            setPasswordMessage(passwordValidation.errorMessage);
        } else {
            setPasswordMessage('');
            setPasswordErrorFlag(false);
        }

        setPassword(event.target.value)
    }

    const SignInHandleChange = async () => {
        try {
            const signInResult = await APISignInRequest(email, password);
            console.log(signInResult.status)
            if (signInResult.status === 200) {
                props.func({ status: true, data: signInResult.data ,})
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
    }


    useEffect(() => {
        if (!isInvalidPassword(email)) setEmailDisableButton(false)
        else setEmailDisableButton(true)
    }, [emailDisableButton, email]);

    useEffect(() => {
        if (!isInvalidPassword(password)) setPasswordDisableButton(false)
        else setPasswordDisableButton(true)
    }, [passwordDisableButton, password]);

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
                    onChange={(e) => HandleChangeEmail(e)}
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
                    placeholder="password"
                    name="emailInput"
                    onChange={(e) => handleChangePassword(e)}
                    helperText={passwordErrorMessage}
                />
            </div>
            <div className="button-container">
                <Button type="submit" onClick={SignInHandleChange} variant="contained" color="primary"
                        href="#contained-buttons" disabled={emailDisableButton + passwordDisableButton}>
                    Send
                </Button>
            </div>
        </div>

    )
}

export default SignInForm;