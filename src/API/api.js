import axios from "axios"



const APISignUpRequest = async (name, email, password) => {
    return axios({
        url: 'https://app-social-network-1.herokuapp.com/auth/register',
        data: {
            name: name,
            email: email,
            password: password
        },
        method: 'post'
    })
}


const APISignInRequest = async(email,password) =>{

    return axios({
            url: 'https://app-social-network-1.herokuapp.com/auth/login',
            data: {
                email: email,
                password: password
            },
            method: 'post'
        })
}

export default APISignUpRequest;

