import React from "react";

import FilterUser from "./FilterUser";
import UserList from "./UserList";
import AddUser from "./AddUser";
import Counter from "./Counter";

function UserManager() {
    return (
        <div>
            <FilterUser/>
            <UserList/>
            <AddUser/>
            <Counter/>
        </div>
    );
}

export default UserManager;