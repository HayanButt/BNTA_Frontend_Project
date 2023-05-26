const User = ({user, deleteUser}) => {
    return ( 
        <>
            <h3>{user.name}</h3>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
        </>
     );
}
 
export default User;