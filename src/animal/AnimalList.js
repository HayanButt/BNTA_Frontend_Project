import Animal from './Animal'

const AnimalList = ({userAnimals}) => {
    const mappedAnimals = userAnimals.map((userAnimal) => {
        return (<Animal key={userAnimal.id} userAnimal = {userAnimal}/>);
    })

    return ( 
        <>
            <h2>AnimalList</h2>
            {mappedAnimals}
        </>
     );
}
 
export default AnimalList;
