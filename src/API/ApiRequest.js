import axios from "axios";

const token = JSON.parse(localStorage.getItem("TOKEN"));

export const DeleteUser = async (id) => {
  return axios({
    url: "https://app-social-network-1.herokuapp.com/user/" + id,
    headers: {
      "x-access-token": token.value,
    },
    method: "DELETE",
  });
};
export const EditUser = async (name, email, id) => {
  return axios({
    url: "https://app-social-network-1.herokuapp.com/user/" + id,
    data: {
      name: name,
      email: email,
    },
    headers: {
      "x-access-token": token.value,
    },
    method: "PUT",
  });
};
export const GetAllUserRequest = async () => {
  return axios({
    url: "https://app-social-network-1.herokuapp.com/user/all",
    headers: {
      "x-access-token": token.value,
    },
    method: "GET",
  });
};
export const GetUserRequest = async () => {
  return axios({
    url: "https://app-social-network-1.herokuapp.com/user/6154982f6b84210016cb930e",
    headers: {
      "x-access-token": token.value,
    },
    method: "GET",
  });
};
export const APISignInRequest = async (email, password) => {
  return axios({
    url: "https://app-social-network-1.herokuapp.com/auth/login",
    data: {
      email: email,
      password: password,
    },
    method: "POST",
  });
};
export const APISignUpRequest = async (name, email, password) => {
  return axios({
    url: "https://app-social-network-1.herokuapp.com/auth/register",
    data: {
      name: name,
      email: email,
      password: password,
    },
    method: "POST",
  });
};
