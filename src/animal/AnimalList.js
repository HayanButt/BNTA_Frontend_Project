import Animal from './Animal'

const AnimalList = ({userAnimals, deleteAnimal}) => {
    const mappedAnimals = userAnimals.map((userAnimal) => {
        return (<Animal key={userAnimal.id} userAnimal = {userAnimal} deleteAnimal={deleteAnimal}/>);
    })

    return ( 
        <div className="pet-list-container">
            <div className="list-header">
                <h2>Pet List</h2>
            </div>
            <div className="pet-list">
                {mappedAnimals}
            </div>
        </div>
     );
}
 
export default AnimalList;