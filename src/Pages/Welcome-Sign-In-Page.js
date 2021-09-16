import "../App.css";
import React, {useState} from "react";
import SignInForm from "../Components/SignInForm";

function WelcomeSignIn(props) {
    return (
        <div className="App">
            <h1 className="App-heder">
                Welcome
                <h1>{props.name}</h1>
            </h1>
        </div>
    )
}

export default WelcomeSignIn;

