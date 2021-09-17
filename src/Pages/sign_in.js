import '../App.css';
import React, {useState} from "react";
import SignInForm from "../Components/SignInForm";
import WelcomeSignIn from "./Welcome-Sign-In-Page";

function Login(props) {
    const [isSignIn, setSignInStatus] = useState(false);
    const [name, setName] = useState('')
    const pull_data = (data) => {
        setName(data.name)
        setSignInStatus(data.status)
    }
    return (
        <div className="App">
            <header className="App-header">
                <p>
                {isSignIn ? <WelcomeSignIn name={name}/> : <SignInForm func={pull_data}/>}
                </p>
                </header>
        </div>
    );
}

export default Login;