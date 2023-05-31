const Animal = ({userAnimal, deleteAnimal}) => {
    return ( 
        <>
            <h3>{userAnimal.name}</h3>
            <p>{userAnimal.birthday}</p>
            <p>{userAnimal.animalType.animalTypeName}</p>

            <button onClick={() => deleteAnimal(userAnimal.id)}>Delete Pet</button>
            
            
        </>
     );
}
 
export default Animal;