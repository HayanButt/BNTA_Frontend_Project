import Animal from './Animal'

const AnimalList = ({userAnimals, deleteAnimal}) => {
    const mappedAnimals = userAnimals.map((userAnimal) => {
        return (<Animal key={userAnimal.id} userAnimal = {userAnimal} deleteAnimal={deleteAnimal}/>);
    })

    return ( 
        <>
            <h2>AnimalList</h2>
            {mappedAnimals}
        </>
     );
}
 
export default AnimalList;
