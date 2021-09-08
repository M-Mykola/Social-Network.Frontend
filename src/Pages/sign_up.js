import "../App.css";
import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const [nameErrorMessage, setNameErrorMessage] = useState("");
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [passwordErrorMessage, setPasswordMessage] = useState("");
    const [repeatPasswordErrorMessage, setRepeatPasswordMessage] = useState("");

    const [emailHasError, setEmailErrorFlag] = useState(false);
    const [nameHasError, setNameErrorFlag] = useState(false);
    const [passwordHasError, setPasswordErrorFlag] = useState(false);
    const [repeatPasswordHasError, setRepeatPasswordErrorFlag] = useState(false);

    const handleChangeName = (event) => {
        setName(event.target.value)
    }
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleChangeRepeatPassword = (event) => {
        setRepeatPassword(event.target.value);
    }

    const validation = (name, email, password, repeatPassword) => {
        const re = /\S+@\S+\.\S+/
        if (name.length <= 5 || name.length >= 15) {
            return {
                status: 'Fail',
                field: 'name',
                errorMessage: "The name must have min 5 and max 15 letters"
            }
        } else if (!re.test(email)) {
            return {
                status: 'Fail',
                field: 'email',
                errorMessage: "Email is not correct"
            }
        } else if (password.length <= 5) {
            return {
                status: 'Fail',
                field: 'password',
                errorMessage: "Password is not correct,the password must have minimum 5 letters"
            }
        } else if (password !== repeatPassword) {
            return {
                status: 'Fail',
                field: 'repeatPassword',
                errorMessage: "Password and confirm password must be the same!"
            }
        }
        return {
            status: 'Ok',
            field: null,
            errorMessage: null,
        }
    }

    const handleChange = async () => {
        const validate = validation(name, email, password, repeatPassword)
        console.log(validate)
        const cleanUp = () => {
            setNameErrorFlag(false)
            setEmailErrorFlag(false);
            setPasswordErrorFlag(false);
            setRepeatPasswordErrorFlag(false);
            setNameErrorMessage('');
            setEmailErrorMessage('');
            setPasswordMessage('');
            setRepeatPasswordMessage('');
        }
        cleanUp()

        if (validate.status === "Fail") {
            if (validate.field === 'name') {
                setNameErrorFlag(true);
                setNameErrorMessage(validate.errorMessage);
            }

            if (validate.field === 'email') {
                setEmailErrorFlag(true);
                setEmailErrorMessage(validate.errorMessage);
            }
            if (validate.field === 'password') {
                setPasswordErrorFlag(true);
                setPasswordMessage(validate.errorMessage);
            }
            if (validate.field === 'repeatPassword') {
                setRepeatPasswordErrorFlag(true);
                setRepeatPasswordMessage(validate.errorMessage);
            }
        }


        // await axios({
        //     url: 'https://app-social-network-1.herokuapp.com/auth/register',
        //     data: {
        //         name: name,
        //         email: email,
        //         password: password
        //     },
        //     method: 'post'
        // },).then(rs => console.log(rs)).catch(e => console.log('error :', e))

    }

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-heder">
                    <a className="App-link" href="https://www.linkedin.com/">
                        Website
                    </a>
                </h1>
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
                                href="#contained-buttons">
                            Register
                        </Button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Register;




