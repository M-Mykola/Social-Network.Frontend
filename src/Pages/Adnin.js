import '../App.css';
import React, {useEffect, useState} from "react";
import GetAllUserRequest from "../API/GetAllUserRequest";
import {Button} from "@material-ui/core";

function Admin(props) {
    const GetAllUser = async (props) => {
        try {
            const getAll = await GetAllUserRequest()
            console.log(getAll.data)

            window.onload = () => {
                loadTheTable("tableData")
            }
            loadTheTable(getAll)
            function loadTheTable(getAll) {
                const tableBody = document.getElementById('tableData')
                let dataHtml = '';
                for (let person of getAll.data) {
                    dataHtml += `<tr><td>${person.name}</td><td>${person.email}</td></tr>`
                }
                tableBody.innerHTML = dataHtml;
            }
        } catch (e) {
            console.error(e)
        }
    }
    return (
        <div >
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
                <tbody className="th" id="tableData">
                </tbody>
            </table>
        </div>
    )
}
export default Admin;
