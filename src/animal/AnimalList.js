import Animal from './Animal'

const AnimalList = ({userAnimals, deleteAnimal}) => {
    const mappedAnimals = userAnimals.map((userAnimal) => {
        return (<Animal key={userAnimal.id} userAnimal = {userAnimal} deleteAnimal={deleteAnimal}/>);
    })

    return ( 
        <>
            {mappedAnimals}
        </>
     );
}
 
export default AnimalList;
