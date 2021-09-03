import "../App.css";
import Button from "@material-ui/core/Button";

function Home() {
    return (

        <div>
            <div className="home-text-header">
                <header className="App-header-home">
                    Welcome
                </header>
                <p > We don't imagine our lives without Internet. We can find all necessary information there. We use
                    popular services and sources every day.
                    One of the most popular sources is social nets. A social network is a very useful invention of the
                    21st century.
                    Nowadays millions of people use social networks.</p>
                <p> It is an Internet site that gives us a chance to support various contacts, keep friendly
                    relationships with classmates, acquaintances.
                    More functional social nets allow watching photos and video films, to listen to music and so on.
                    There is a possibility to enter different interesting groups.
                    There exist social nets connecting people according to a general interest, for example, computer
                    games players are combined into a social net.</p>

                <div className="sign-button-container">

                    <Button href="sign-in">
                        SIGN IN
                    </Button>

                    <Button href="sign-up">
                      SIGN UP
                    </Button>

                </div>
            </div>
            </div>
    )
}

export default Home;