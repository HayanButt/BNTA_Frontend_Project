import User from "./User";
import {useState} from 'react';

const UserList = ({users}) => {
    
    const [user, setUser] = useState([]);
    
    const userMapping = users.map(user => <User user={user}/>)

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    return ( 
        <>
            <h2>userList</h2>
            {userMapping}
        </>
     );
}
 
export default UserList;