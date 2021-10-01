import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";
import {APISignUpRequest} from "../API/ApiRequest"
import {isInvalidEmail, isInvalidName, isInvalidPassword, isInvalidRepeatPassword} from "../Validation/Validation";

function SignUpForm(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const [nameErrorMessage, setNameErrorMessage] = useState("");
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
    const [repeatPasswordErrorMessage, setRepeatPasswordErrorMessage] = useState("");

    const [emailHasError, setEmailErrorFlag] = useState(false);
    const [nameHasError, setNameErrorFlag] = useState(false);
    const [passwordHasError, setPasswordErrorFlag] = useState(false);
    const [repeatPasswordHasError, setRepeatPasswordErrorFlag] = useState(false);

    const [nameDisableButton, setNameDisableButton] = useState(true)
    const [emailDisableButton, setEmailDisableButton] = useState(true)
    const [passwordDisableButton, setPasswordDisableButton] = useState(true)
    const [repeatPasswordDisableButton, setRepeatPasswordDisableButton] = useState(true)

    useEffect(() => {
        if (!isInvalidName(name)) setNameDisableButton(false)
        else setNameDisableButton(true)
    }, [nameDisableButton, name]);

    useEffect(() => {
        if (!isInvalidEmail(email)) setEmailDisableButton(false)
        else setEmailDisableButton(true)
    }, [emailDisableButton, email]);

    useEffect(() => {
        if (!isInvalidPassword(password)) setPasswordDisableButton(false)
        else setPasswordDisableButton(true)
    }, [passwordDisableButton, password]);

    useEffect(() => {
        if (!isInvalidRepeatPassword(repeatPassword)) setRepeatPasswordDisableButton(false)
        else setRepeatPasswordDisableButton(true)
    }, [repeatPasswordDisableButton, repeatPassword]);

    const handleChangeName = (event) => {
        const nameValidation = isInvalidName(event.target.value)
        if (name && nameValidation) {
            setNameErrorFlag(true);
            setNameErrorMessage(nameValidation.errorMessage);
        } else {
            setNameErrorMessage('');
            setNameErrorFlag(false);
        }
        setName(event.target.value);
    }
    const handleChangeEmail = (event) => {
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
            setPasswordErrorMessage(passwordValidation.errorMessage);
        } else {
            setPasswordErrorMessage('');
            setPasswordErrorFlag(false);
        }
        setPassword(event.target.value);
    }

    const handleChangeRepeatPassword = (event) => {
        const repeatPasswordValidation = isInvalidRepeatPassword(event.target.value)
        if (repeatPassword && repeatPasswordValidation) {
            setRepeatPasswordErrorFlag(true);
            setRepeatPasswordErrorMessage(repeatPasswordValidation.errorMessage);
        } else {
            setRepeatPasswordErrorMessage('');
            setRepeatPasswordErrorFlag(false);
        }
        setRepeatPassword(event.target.value);
    }
    const handleChange = async () => {
        try {
            const signUpResult = await APISignUpRequest(name, email, password);
            if (signUpResult.status === 201) {
                props.signUpHandler(true);
                return;
            }
        } catch (e) {
            console.error(e)
        }
        const cleanUp = () => {
            setNameErrorFlag(false);
            setEmailErrorFlag(false);
            setPasswordErrorFlag(false);
            setRepeatPasswordErrorFlag(false);
            setNameErrorMessage('');
            setEmailErrorMessage('');
            setPasswordErrorMessage('');
            setRepeatPasswordErrorMessage('');
        }
        cleanUp()
    }
    return (
        <div className="main-input-container">
            <div className="input-container">

                <TextField
                    error={nameHasError}
                    id="outlined-basic1"
                    label="Name"
                    type="name"
                    placeholder="Name"
                    variant="outlined"
                    helperText={nameErrorMessage}
                    onChange={(e) => handleChangeName(e)}
                />
            </div>

            <div className="input-container">
                <TextField
                    error={emailHasError}
                    id="outlined-basic2"
                    label="Email"
                    type="email"
                    placeholder="Email"
                    variant="outlined"
                    helperText={emailErrorMessage}
                    onChange={(e) => handleChangeEmail(e)}
                />
            </div>

            <div className="input-container">
                <TextField
                    error={passwordHasError}
                    id="outlined-basic3"
                    label="Password"
                    variant="outlined"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => handleChangePassword(e)}
                    helperText={passwordErrorMessage}
                />
            </div>

            <div className="input-container">
                <TextField
                    error={repeatPasswordHasError}
                    id="outlined-basic4"
                    label="Confirm password"
                    variant="outlined"
                    type="password"
                    placeholder="repeatPassword"
                    onChange={(e) => handleChangeRepeatPassword(e)}
                    helperText={repeatPasswordErrorMessage}
                />
            </div>

            <div className="button-container-for-up">
                <Button type="submit" onClick={handleChange} variant="contained" color="primary"
                        href="#contained-buttons"
                        disabled={nameDisableButton + emailDisableButton + passwordDisableButton + repeatPasswordDisableButton}>
                    Register
                </Button>
            </div>

        </div>
    )
}

export default SignUpForm;