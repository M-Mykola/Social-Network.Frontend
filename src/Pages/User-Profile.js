import "../App.css";
import GetUserRequest from "../API/GetUserRequest"
import React, {useEffect, useState} from "react";

function UserProfile(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [friends, setFriends] = useState('');
    const [password, setPassword] = useState('');
    const [id, setId] = useState('');

    const User = async () => {
        try {
            const getUser = await GetUserRequest();
            if (getUser.data) {
                console.log("name", getUser.data.name);
                setName(getUser.data.name);
                setEmail(getUser.data.email);
                setFriends(getUser.data.friends);
                setPassword(getUser.data.password);
                setId(getUser.data._id);
            }
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{password}</h1>
            <h1>{id}</h1>
            <h1>{friends}</h1>

            <button type="submit" className="button" onClick={User}> Hello User</button>
        </div>

    )
};

export default UserProfile;
