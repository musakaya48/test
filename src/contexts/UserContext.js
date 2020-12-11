import React from 'react';
import axios from 'axios';

const UserContext = React.createContext(null);

export const UserProvider = ({children}) => {
    
    const[users,setUsers] = React.useState([]);
    const[currentUsers,setCurrentUsers] = React.useState([]);

    React.useEffect(() => {
		// fetch("https://jsonplaceholder.typicode.com/users")
		// 	.then((res) => res.json())
        //     .then((data) =>{ 
        //         setUsers(data);
        //         setCurrentUsers(data);
        //     })
        //     .catch((e) => console.log(e));            



        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {          
          setUsers(res.data);
          setCurrentUsers(res.data);
        })

    }, []);

    const values = {
    users,
    currentUsers,
    setUsers,
    setCurrentUsers
    };

return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContext;