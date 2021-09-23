import axios from "axios";

const APISignInRequest = async(email,password) =>{
    return axios({
        url: 'https://app-social-network-1.herokuapp.com/auth/login',
        data: {
            email: email,
            password: password
        },
        method: 'POST'
    })
}
export default APISignInRequest;


