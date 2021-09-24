import '../App.css';
import React, {useState} from "react";
import SignInForm from "../Components/SignInForm";
import WelcomeSignIn from "./Welcome-Sign-In-Page";

function Login(props) {
    const [isSignIn, setSignInStatus] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [friends, setFriends] = useState('')
    const [password, setPassword] = useState('')
    const [id, setId] = useState('')

    const pull_data = (data) => {
        setName(data.data.user.name)
        setEmail(data.data.user.email)
        setFriends(data.data.user.friends)
        setPassword(data.data.user.password)
        setId(data.data.user._id)
        setSignInStatus(data.status)
    }
    return (
        <div className="App">
            <header className="App-header">
                <p>
                {isSignIn ? <WelcomeSignIn name={name} email={email} friends={friends} password={password} id={id}/> : <SignInForm func={pull_data}/>}
                </p>
                </header>
        </div>
    );
}

export default Login;