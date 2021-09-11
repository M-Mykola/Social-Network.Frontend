import "./App.css";
import React from "react";
import {
    BrowserRouter as Router,Switch,Route
} from "react-router-dom";
import Home from "./Pages/home"
import  Login from './Pages/sign_in'
import  Register from './Pages/sign_up'
function App() {
    return (
        <Router>
            <div className="App">
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/sign-in" component={Login}/>
                <Route path="/sign-up" component={Register}/>
            </Switch>
            </div>
        </Router>
    )
};
export default App;
