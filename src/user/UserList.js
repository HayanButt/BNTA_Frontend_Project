import User from "./User";
import {useState} from 'react';

const UserList = ({users, deleteUser, selectUserForEditing}) => {
    
    // const [user, setUser] = useState([]);
    
    const userMapping = users.map(user =>{
        return ( <User 
        user={user}     
        deleteUser={deleteUser}
        key={user.id}
        selectUserForEditing={selectUserForEditing}/>
        );
    });

    return ( 
        <>
            <section className="row">
                <h2>userList</h2>
                {userMapping}
            </section>
        </>
     );
}
 
export default UserList;