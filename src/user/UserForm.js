import { useEffect, useState } from "react";

const UserForm = ({saveUser, userToUpdate}) => {
    const [newUser, setNewUser] = useState({
        name: ""
    })

    useEffect(()=> {
        if (userToUpdate !== null && userToUpdate.id){
            setNewUser(userToUpdate);
        }
    }, [userToUpdate])

    const handleChange = (event) => {
        const propertyName = event.target.name;
        const copiedUser = {...newUser};
        copiedUser[propertyName] = event.target.value;
        setNewUser(copiedUser);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        saveUser(newUser);
        setNewUser({
            name: ""
        })
    }

    return ( 
        <form onSubmit={handleFormSubmit}>
            <input 
                type="text"
                name="name"
                placeholder="Enter your name"
                value={newUser.name}
                onChange={handleChange}
            />
            <button type="submit">{newUser.id ? "Update" : "Create"}</button>
        </form>
     );
}
 
export default UserForm;