
import React from 'react';
import {UserProvider} from "../contexts/UserContext";
import UserManager from "../components/UserManager";

function Users() {
    return (
        <UserProvider>
        <UserManager/> 
        </UserProvider>
    );
}

export default Users;
