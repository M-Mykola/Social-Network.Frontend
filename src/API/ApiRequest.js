import axios from "axios";

export const DeleteUser = async (id, token) => {
  return axios({
    url: "https://app-social-network-1.herokuapp.com/user/" + id,
    headers: {
      "x-access-token": "token",
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
      "x-access-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjE1NWYwOWNjODdkMGYwMDE2NGQ3ZmFkIiwiZW1haWwiOiJkZXZlbG9wQG5vZGVqcy5jb20iLCJpYXQiOjE2MzMwMjIxMTQsImV4cCI6MTYzMzEwODUxNH0.51F6rANCsdOnsmJ0Cb21wgDf7LaDQM8ISqWC0Vajvno",
    },
    method: "PUT",
  });
};

export const GetAllUserRequest = async () => {
  return axios({
    url: "https://app-social-network-1.herokuapp.com/user/all",
    headers: {
      "x-access-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjE1NWYwOWNjODdkMGYwMDE2NGQ3ZmFkIiwiZW1haWwiOiJkZXZlbG9wQG5vZGVqcy5jb20iLCJpYXQiOjE2MzMwMjIxMTQsImV4cCI6MTYzMzEwODUxNH0.51F6rANCsdOnsmJ0Cb21wgDf7LaDQM8ISqWC0Vajvno",
    },
    method: "GET",
  });
};

export const GetUserRequest = async () => {
  return axios({
    url: "https://app-social-network-1.herokuapp.com/user/6154982f6b84210016cb930e",
    headers: {
      "x-access-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjE1NWYwOWNjODdkMGYwMDE2NGQ3ZmFkIiwiZW1haWwiOiJkZXZlbG9wQG5vZGVqcy5jb20iLCJpYXQiOjE2MzMwNzEwNDcsImV4cCI6MTYzMzE1NzQ0N30.OCYYd4tKWf-VkPB4bWzbV3w8vhg0FLoFvimJR1pjbnU",
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
  })
    .then(function (response) {
      localStorage.setItem("token", APISignInRequest.response.data.token);
      console.log(response.data.token);
    })
    .catch(function (error) {
      console.log(error);
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
