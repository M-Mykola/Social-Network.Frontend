import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Sign_in";
import Register from "./Pages/Sign_up";
import WelcomeSignIn from "./Pages/Welcome-Sign-In-Page";
import UserProfile from "./Pages/User-Profile";
import Admin from "./Pages/Admin";
import Error from "./Pages/Error404";
import UpdateUser from "./Components/EditUserForm";
import ButtonAppBar from "./Components/AppBar";

function App() {
  return (
    <Router>
      <div className="App">
        <ButtonAppBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={Register} />
          <Route path="/welcome" component={WelcomeSignIn} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/admin" component={Admin} />
          <Route path="/user-info" component={UpdateUser} />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
