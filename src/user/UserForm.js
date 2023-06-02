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
        <>
        <section className="userForm__wrapper row">
            <form onSubmit={handleFormSubmit}>
                <h3 className="user__form--title">{newUser.id ? "Update username" : "Create a new user"}</h3>
                <input 
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={newUser.name}
                    onChange={handleChange}
                    />
                <button className="user__form--button" type="submit">{newUser.id ? "Update" : "Create"}</button>
            </form>
        </section>
        </>
     );
}
 
export default UserForm;