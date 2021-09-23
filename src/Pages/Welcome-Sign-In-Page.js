import "../App.css";

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

