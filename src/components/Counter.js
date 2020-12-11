import React from 'react';
import UserContext from '../contexts/UserContext'

function Counter() {
    const{users,currentUsers} = React.useContext(UserContext);

    return (
        <div>
            Toplam: {users.length} / Filtrelenmiş: {currentUsers.length}
        </div>
    );
}

export default Counter;