import '../App.css';
import React, {useEffect, useState,} from "react";
import * as ReactRouterDOM from 'react-router-dom'
import {DeleteUser, GetAllUserRequest} from "../API/ApiRequest";
import {Button} from "@material-ui/core";

const {
    Link,
} = ReactRouterDOM;

function Admin() {
    const [users, setUsers] = useState([]);

    const deleteOne = (id) => {
        if (id) DeleteUser(id)
    }

    const getAllUser = async () => {
        try {
            const getAll = await GetAllUserRequest()
            setUsers(getAll.data)
        } catch (e) {
            console.error(e)
        }
    }
    useEffect(async () => {
        if (users.count) return;
        await getAllUser()
    }, [getAllUser, users])

    return (
        <div>
            <table className="editUserForm">
                <thead className="tableHead">
                <tr>
                    <th className="th">Name</th>
                    <th className="th">Email</th>
                    <th className="tr">Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.map((item) => <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                        <Button variant="contained" onClick={() => deleteOne(item._id)}>Delete</Button>
                    </td>
                    <td><Button className="buttonEditUser" variant="contained"> <Link
                        to={{pathname: "/user-info", state: {item}}}>Edit User</Link> </Button></td>
                </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default Admin;
