import "./App.css";
import React from "react";
import {
    BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Home from "./Pages/home"
import Login from './Pages/sign_in'
import Register from './Pages/sign_up'
import WelcomeSignIn from "./Pages/Welcome-Sign-In-Page";
import Error from "./Pages/Error404";
import UserProfile from "./Pages/User-Profile"

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/sign-in" component={Login}/>
                    <Route path="/sign-up" component={Register}/>
                    <Route path="/welcome" component={WelcomeSignIn}/>
                    <Route path="/profile" component={UserProfile}/>
                    <Route component={Error}/>
                </Switch>
            </div>
        </Router>
    )
};

export default App;
