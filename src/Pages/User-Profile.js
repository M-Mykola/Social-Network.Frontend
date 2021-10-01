import "../App.css";
import {GetUserRequest} from "../API/ApiRequest";
import React, {useState} from "react";
import {Button} from "@material-ui/core";

function UserProfile() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [friends, setFriends] = useState('');
    const [password, setPassword] = useState('');
    const [id, setId] = useState('');
    const User = async () => {
        try {
            const getUser = await GetUserRequest();
            if (getUser.data) {
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
        <div className="editUserForm">
            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{password}</h1>
            <h1>{id}</h1>
            <h1>{friends}</h1>
            <Button type="submit" variant="contained" color="primary" onClick={User}> Hello User</Button>
        </div>

    )
};

export default UserProfile;
