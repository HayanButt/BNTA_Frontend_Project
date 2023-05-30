const Animal = ({userAnimal}) => {
    return ( 
        <>
            <h3>{userAnimal.name}</h3>
            <p>{userAnimal.birthday}</p>
            <p>{userAnimal.animalType.animalTypeName}</p>
            
        </>
     );
}
 
export default Animal;