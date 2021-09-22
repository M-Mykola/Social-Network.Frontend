import "../App.css";

function WelcomeSignIn(props) {

    return (
        <div className="App">
                Welcome
                <h1>{props.name}</h1>
                <h2>{props.email}</h2>
                <h3>{props.friends}</h3>
                <h4>{props.password}</h4>
                <h5>{props.id}</h5>
            
        </div>
    )
}

export default WelcomeSignIn;

