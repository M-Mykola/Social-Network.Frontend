import axios from "axios";

const DeleteUser = async (id) =>{
    return axios({
        url: 'https://app-social-network-1.herokuapp.com/user/' + id,
        headers: {
            'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjE0YTBlM2UwMmMxYjVlM2IwM2QxYTgyIiwiZW1haWwiOiJtYXNkZGZnYXRpa29mZiIsImlhdCI6MTYzMjc1NDE0NiwiZXhwIjoxNjMyODQwNTQ2fQ.hLqNQgdMGXlcFsbRuvo_e-4v4b0sTthTL32bywH9s_8'
        },
        method: 'DELETE'
    })
}
export default DeleteUser;
