import "../App.css";
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

function Register(){
    let name ='';
    let email = '';
    let password = '';

    const handleChangeName = (event) => {
        name = event.target.value;
        console.log(name)
    }
    const handleChangeEmail = (event) => {
        email = event.target.value;
        console.log(email)
    }

    const handleChangePassword = (event) => {
        password = event.target.value;
        console.log(password)
    }

    const handleChange = async () => {
        if (!name || !password || !email ) {
            alert ("Please enter the fields correctly")
        }
    await axios({
        url: 'https://app-social-network-1.herokuapp.com/auth/register',
        data: {
            name: name,
            email: email,
            password: password
        },
        method: 'post'
    },).then(rs => console.log(rs)).catch(e => console.log('error :', e))
}
    return(
        <div className="App">
            <header className="App-header">
                <h1 className="App-heder">
                    <a className="App-link" href="https://www.linkedin.com/">
                        Website
                    </a>
                </h1>
                <div className="main-input-container" >
                    <div className="input-container"  >
                        <TextField
                            id="outlined-basic1"
                            label="Name"
                            type="name"
                            placeholder="Name"
                            variant="outlined"
                            name="emailInput"
                            onChange={(e) => handleChangeName(e)}
                        />
                    </div>
                    <div className="input-container"  >
                        <TextField
                            id="outlined-basic1"
                            label="Email"
                            type="email"
                            placeholder="Email"
                            variant="outlined"
                            name="emailInput"
                            onChange={(e) => handleChangeEmail(e)}
                        />
                    </div>
                    <div className="input-container">
                        <TextField
                            id="outlined-basic2"
                            label="Password"
                            variant="outlined"
                            type="password"
                            placeholder="Email"
                            name="emailInput"
                            onChange={(e) => handleChangePassword(e)}
                        />
                    </div>
                    <div className="button-container-for-up">
                        <Button type="submit" onClick={handleChange} variant="contained" color="primary" href="#contained-buttons" >
                            Register
                        </Button>
                    </div>
                </div>
            </header>
        </div>
    );

}

export default Register;
