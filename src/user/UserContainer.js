import {useEffect, useState} from "react"
import UserForm from "./UserForm";
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

    const postUser = (newUser) => {
        fetch(`${SERVER_URL}/users`, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(newUser),
        })
            .then((response) => response.json())
            .then((response) => {
                setUsers([...users, response]);
            });
    };
    
    // const updateUser = (updatedUser) => {
    //     fetch(`${SERVER_URL}/users/${updatedUser.id}`, {
    //         method: "PUT",
    //         headers: {"Content-Type" : "application/json"},
    //         body: JSON.stringify(updatedUser),
    //     })
    //         .then((response) => response.json())
    //         .then((jsonData) => {
    //             const usersToKeep = users.filter((user) => user.id !== updatedUser.id)
    //             setUsers([...usersToKeep, jsonData]);
    //         });
    //         setUserToUpdate(null);
    // };
    
    const saveUser = (user) => {
        // user.id ? updateUser(user) : postUser(user);
        postUser(user);
    }
    
    return (  
        <>
            <h1>Create new user</h1>
            <UserForm saveUser={saveUser}/>
            <UserList   
                users={users}
                deleteUser={deleteUser}/>
            
        </>
    );
}
 
export default UserContainer;