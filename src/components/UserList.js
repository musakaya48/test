import React , { useContext } from "react";
import UserContext from "../contexts/UserContext";
import UserListItem from "./UserListItem";

function UserList(){

const {currentUsers} = useContext(UserContext);

return (
    
    <div>
        <ul>

            {currentUsers.map((x,i) =>(<UserListItem key={i} usr={x}/>)
            )}

        </ul>
    </div>
);

}

export default UserList;