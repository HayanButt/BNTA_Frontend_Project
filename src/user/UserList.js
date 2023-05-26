import User from "./User";
import {useState} from 'react';

const UserList = ({users, deleteUser}) => {
    
    const [user, setUser] = useState([]);
    
    const userMapping = users.map(user => <User user={user}     deleteUser={deleteUser}/>)

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    return ( 
        <>
            <h2>userList</h2>
            {userMapping}
        </>
     );
}
 
export default UserList;