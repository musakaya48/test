import React from 'react';
import UserContext from "../contexts/UserContext"

function FilterUser() {
    
    const [filter,setFilter] = React.useState('');
    const{users,setCurrentUsers} = React.useContext(UserContext);

    
    const filterChange = (e)=>{
        setFilter(e.target.value);

        setCurrentUsers(users.filter((data) => data.name.toLowerCase().includes(e.target.value.toLowerCase())));
    };

    return (
        <div>
            <input placeholder="Ara" value={filter} onChange={filterChange}/>
        </div>
    );
}

export default FilterUser;