const Animal = ({userAnimal, deleteAnimal}) => {
    return ( 
        <>
            <div className="animal__item">
                <h3>{userAnimal.name}</h3>
                <p>{userAnimal.birthday}</p>
                <p>{userAnimal.animalType.animalTypeName}</p>

                <button onClick={() => deleteAnimal(userAnimal.id)}>Delete Pet</button>
            </div>
            
            
        </>
     );
}
 
export default Animal;