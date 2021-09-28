import '../App.css';
import React, {useEffect, useState} from "react";
import GetAllUserRequest from "../API/GetAllUserRequest";
import {Button} from "@material-ui/core";
import DeleteUser from "../API/DeleteUser";

function Admin() {

    const [users, setUsers] = useState([]);
    const deleteOne = (id) => {
        console.log(id)
        if (id) DeleteUser(id)
    }
    const getAllUser = async () => {
        try {
            const getAll = await GetAllUserRequest()
            loadTheTable(getAll)

            function loadTheTable(getAll) {
                setUsers(getAll.data)
            }
        } catch (e) {
            console.error(e)
        }
    }
    useEffect(async () => {
        if (users.count)
            return
        else await getAllUser()
    }, [getAllUser, users])

    return (
        <div>
            <table className="table">
                <thead>
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
                        <button onClick={() => deleteOne(item._id)}>Delete</button>
                    </td>
                </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default Admin;
