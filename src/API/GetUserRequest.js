import axios from "axios";

const GetUserRequest = async () => {
    return axios({
        url: 'https://app-social-network-1.herokuapp.com/user/614444f171183200167be010',
        headers: {
            'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjE0NzNhYTUzN2ZiN2YwMDE2YmEzN2M1IiwiZW1haWwiOiJtaXNoYUBjb20uY29tIiwiaWF0IjoxNjMyMjIyODcyLCJleHAiOjE2MzIzMDkyNzJ9.0JgTMZ7FHSfeXy8NESVEpJXB9iGpzP7AUjB7uD54YQQ'
        },
        method: 'GET'
    })
}
export default GetUserRequest;






