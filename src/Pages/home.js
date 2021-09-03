import "../App.css";
import Button from "@material-ui/core/Button";

function Home() {
    return (

        <div>
            <div className="home-text-header">
                <header className="App-header-home">
                    Welcome
                </header>
                <p> We don't imagine our lives without Internet. We can find all necessary information there. We use
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
                <p>
                    Social networking websites create new ways for engaging people belonging to different communities
                    (Baumer et al., 2010). Social networks allow users to communicate with people exhibiting different
                    moral and social values. The websites provide a very powerful medium for communication among
                    individuals that leads to mutual learning and sharing of valuable knowledge (Sorensen, 2009). The
                    most popular social networking websites are Facebook, LinkedIn
                </p>


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