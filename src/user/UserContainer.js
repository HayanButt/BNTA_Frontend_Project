import {useEffect, useState} from "react"
import UserList from './UserList'

const SERVER_URL = "http://localhost:8080";

const UserContainer = () => {
    
    const [users, setUsers] = useState([]);

    const fetchAPI = async ()  => {
        const response = await fetch("http://localhost:8080/users");
        const data = await response.json();
        
        setUsers(data);
    }

    useEffect(() => {
        fetchAPI()
    } ,[])
  
  console.log(users)

    const deleteUser = (id) => {
        fetch(`${SERVER_URL}/users/${id}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
        })
    
        const newUsers = users.filter((user) => user.id !== id);
        setUsers(newUsers);
    };
    
    return (  
        <>
            <UserList   
                users={users}
                deleteUser={deleteUser}/>
            <h1>Hi</h1>
        </>
    );
}
 
export default UserContainer;