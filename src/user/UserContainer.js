import {useEffect, useState} from "react"
import UserForm from "./UserForm";
import UserList from './UserList';
import AnimalContainer from '../animal/AnimalContainer';
import './User.css'

const SERVER_URL = "http://localhost:8080";

const UserContainer = () => {
    
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState([])

    const [userToUpdate, setUserToUpdate] = useState(null);

    const fetchAPI = async ()  => {
        const response = await fetch("http://localhost:8080/users");
        const data = await response.json();
        
        setUsers(data);
    }
    

    useEffect(() => {
        fetchAPI()
    } ,[])
  

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
    
    const updateUser = (updatedUser) => {
        fetch(`${SERVER_URL}/users/${updatedUser.id}?name=${updatedUser.name}`, {
            method: "PATCH",
            headers: {"Content-Type" : "application/json"}
        })
        .then((response) => response.json())
        .then((jsonData) => {
            const usersToKeep = users.filter((user) => user.id !== updatedUser.id)
            setUsers([...usersToKeep, jsonData]);
        });
        setUserToUpdate(null);
        setCurrentUser(updatedUser);
    };
    
    const saveUser = (user) => {
        user.id ? updateUser(user) : postUser(user);
    }

    const selectUserForEditing = (user) => {
        setUserToUpdate(user) 
    }

    const currentUserOptions = users.map((user) => {
        return (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        );
      });

      const handleCurrentUserChange = (event) => {
        const currentUserId = parseInt(event.target.value);
        const selectedUser = users.find(user => {
            return user.id === currentUserId;
        });
        setCurrentUser(selectedUser)
      }

      const handleEditClick = () => {
        selectUserForEditing(currentUser);
        const userForm = document.querySelector("form")
        userForm.scrollIntoView({behavior: "smooth"})
    }
    
    return (  
        <>
            <header className="navbar__Wrapper">
                <h1>Pet Checklist.</h1>
                <nav>
                    <a href="">Animals</a>
                    <a href="">Task</a>
                    <select name="currentUser" onChange={handleCurrentUserChange} >
                        <option disabled-value="select-current-user">Select a user</option>
                        {currentUserOptions}
                    </select>
                </nav>
            </header>

            <section className="tag-line-bar">
                <h3>. Pawroiritise Like a Pro .</h3>
            </section>
        

            <div className="row-current-user">
                {currentUser.id ?<h2>Welcome {currentUser.name}!</h2>: <h2>Select or create user</h2>}
                <button onClick={() => deleteUser(currentUser.id)}>Delete user</button>
                <button onClick={handleEditClick}>Edit user</button>
            </div> 
            <div>
            <UserForm saveUser={saveUser} userToUpdate ={userToUpdate}/>
                {/* <UserList    
                    users={users}
                    deleteUser={deleteUser} 
                    selectUserForEditing = {selectUserForEditing}
                /> */}
                
            <AnimalContainer currentUser={currentUser}/>
            </div>
        </>
    );
}
 
export default UserContainer