const User = ({user, deleteUser, selectUserForEditing}) => {
    const handleEditClick = () => {
        selectUserForEditing(user);
        const userForm = document.querySelector("form")
        userForm.scrollIntoView({behavior: "smooth"})
    }

    return ( 
        <>
            <h3>{user.name}</h3>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
            <button onClick={handleEditClick}>Edit</button>
        </>
     );
}
 
export default User;