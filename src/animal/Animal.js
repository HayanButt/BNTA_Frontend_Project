const Animal = ({userAnimal}) => {
    return ( 
        <>
            <h3>{userAnimal.name}</h3>
            <p>{userAnimal.birthday}</p>
            {/* <p>{userAnimal.animalType.animalTypeName}</p> */}
            <p>{userAnimal.id}</p>
            
        </>
     );
}
 
export default Animal;