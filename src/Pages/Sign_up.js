import "../App.css";
import React, {useState} from "react";
import Footer from "../Components/Footer_component";

import SignUpForm from "../Components/SignUpForm";
import WelcomeSignUpScreen from "../Components/WelcomeSignUpScreen";
function Register() {
    const [isSignUp, setSignUpStatus] = useState(false);
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-heder">
                    <a className="App-link" href="https://www.linkedin.com/">
                        Website
                    </a>
                </h1>
                {isSignUp ? <WelcomeSignUpScreen/> : <SignUpForm  signUpHandler={setSignUpStatus}/>}
                <div className="App-Footer">
                    <Footer/>
                </div>
            </header>
        </div>
    );
}

export default Register;




