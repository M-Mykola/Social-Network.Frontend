import '../App.css';
import React, {useState} from "react";
import GetAllUserRequest from "../API/GetAllUserRequest";
import {Button} from "@material-ui/core";

function Admin() {

    const [users, setUsers] = useState([]);
    const GetAllUser = async () => {
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
    return (
        <div>
            <header>
                <Button onClick={GetAllUser}>All User</Button>
            </header>
            <table className="table">
                <thead>
                <tr className="tr">
                    <th className="th">Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                    {users.map((item,index)=> <tr><td>{item.name}</td><td>{item.email}</td></tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default Admin;
