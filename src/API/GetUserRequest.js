import axios from "axios";

const GetUserRequest = async () => {
    return axios({
        url: 'https://app-social-network-1.herokuapp.com/user/6154982f6b84210016cb930e',
        headers: {
            'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjE1NWYwOWNjODdkMGYwMDE2NGQ3ZmFkIiwiZW1haWwiOiJkZXZlbG9wQG5vZGVqcy5jb20iLCJpYXQiOjE2MzMwNzEwNDcsImV4cCI6MTYzMzE1NzQ0N30.OCYYd4tKWf-VkPB4bWzbV3w8vhg0FLoFvimJR1pjbnU'},
        method: 'GET'
    })
}
export default GetUserRequest;






  