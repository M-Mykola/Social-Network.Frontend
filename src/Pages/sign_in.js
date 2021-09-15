import '../App.css';
import Footer from "../Components/Footer_component";
import React, {useState} from "react";
import WelcomeSignInScreen from "../Components/WelcomeSignUpScreen";
import SignInForm from "../Components/SignUpForm";


function Login() {
    const [isSignIn, setSignInStatus] = useState(false);

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-heder">
                    <a className="App-link" href="https://www.linkedin.com/">
                        Website
                    </a>
                </h1>
                {isSignIn ? <WelcomeSignInScreen/> : <SignInForm  signInHandler={setSignInStatus}/>}
                <div className="App-Footer">
                    <Footer/>
                </div>
            </header>
        </div>
    );
}

export default Login;