import '../App.css';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from 'axios'

function Login() {
    let email = '';
    let password = '';
    const handleChangeEmail = (event) => {
        email = event.target.value;
    }
    const handleChangePassword = (event) => {
        password = event.target.value
    }
    const handleChange = async () => {
        if (!password || !email) {
            /**
             * TODO:
             * Need to add some user friendly message if validation is not path
             */
            return
        }
        await axios({
            url: 'http://localhost:3000/auth/login',
            data: {
                email: email,
                password: password
            },
            method: 'post'
        },).then(rs => console.log(rs)).catch(e => console.log('error :', e))
    }
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-heder">
                    <a className="App-link" href="https://www.linkedin.com/">
                        Website
                    </a>
                </h1>
                <div className="main-input-container" >
                    <div className="input-container"  >
                        <TextField
                            id="outlined-basic1"
                            label="Email"
                            type="email"
                            placeholder="Email"
                            variant="outlined"
                            name="emailInput"
                            onChange={(e) => handleChangeEmail(e)}
                        />
                    </div>
                    <div className="input-container">
                        <TextField
                            id="outlined-basic2"
                            label="Password"
                            variant="outlined"
                            type="password"
                            placeholder="Email"
                            name="emailInput"
                            onChange={(e) => handleChangePassword(e)}
                        />
                    </div>
                    <div className="button-container">
                        <Button  type="submit" onClick={handleChange} variant="contained" color="primary" href="#contained-buttons" >
                            Send
                        </Button>
                    </div>
                </div>
            </header>
        </div>
    );
}
export default Login;