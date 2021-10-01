export const isInvalidName = (name) => {
    if (name.length <= 5 || name.length >= 15) return {errorMessage: "The name must have min 5 and max 15 letters"}
    return null
}
export const isInvalidEmail = (email) => {
    const re = /\S+@\S+\.\S+/
    if (!re.test(email) || email.length <= 0) return {errorMessage: "Email is not correct"}
    return null
}
export const isInvalidPassword = (password) => {
    if (password.length <= 5) return {errorMessage: "Password is not correct,the password must have minimum 5 letters"}
    return null
}
export const isInvalidRepeatPassword = (repeatPassword) => {
    if (!repeatPassword) return {errorMessage: "Password and confirm password must be the same!"}
    return null
}

