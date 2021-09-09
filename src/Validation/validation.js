import ApiAxios from "../API/api";

const Validation = (name, email, password, repeatPassword) => {
    const re = /\S+@\S+\.\S+/
    if (name.length <= 5 || name.length >= 15) {
        return {
            status: 'Fail',
            field: 'name',
            errorMessage: "The name must have min 5 and max 15 letters"
        }
    } else if (!re.test(email)) {
        return {
            status: 'Fail',
            field: 'email',
            errorMessage: "Email is not correct"
        }
    } else if (password.length <= 5) {
        return {
            status: 'Fail',
            field: 'password',
            errorMessage: "Password is not correct,the password must have minimum 5 letters"
        }
    } else if (password !== repeatPassword) {
        return {
            status: 'Fail',
            field: 'repeatPassword',
            errorMessage: "Password and confirm password must be the same!"
        }
    }
    return {
        status: 'Ok',
        field: null,
        errorMessage: null,
    }
}

export default Validation;