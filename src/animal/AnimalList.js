import Animal from './Animal'

const AnimalList = ({userAnimals,animals}) => {
    const mappedAnimals = userAnimals.map((userAnimal) => {
        return (<Animal key={userAnimal.id} userAnimal={userAnimal}/>);
    });

    return ( 
        <>
            <h2>AnimalList</h2>
            {mappedAnimals}
        </>
     );
}
 
export default AnimalList;

/* const PetsList = ({pets}) => {
    const petObjectsArray = pets.map(pet => pet);

    return <section>
        {petObjectsArray.map(pet => <Pet key={pet.id} pet={pet} />)}
    </section>
} 

*/
