import { useState } from "react";
// import DatePicker from 'react-date-picker';
const AnimalForm = () => {
    
    const [newAnimal, setNewAnimal] = useState({
        name: "",
        birthday:"",
        animalType: null
    });

    // const [startDate, setStartDate] = useState(new Date());

    // const handleAnimalTypeChange = (event) => {
    //     const animalTypeId = parseInt(event.target.value)
    //     const selectedAnimalType = animalTypes.find(animalType => {
    //         return animalType.id === animalTypeId 
    //     })
    //     const copiedAnimal = {...newAnimal}
    //     copiedAnimal.animalType = selectedAnimalType
    //     setNewAnimal(copiedAnimal)
    // }

    const handleChange =() => {}
    
    return ( 
        <>
            <form>
                <input
                type="text"
                name="name"
                placeholder="Enter your pet's name"
                value={newAnimal.name} 
                onChange={handleChange}/>
                
                <input
                type="date"
                name="birthday"
                placeholder="Enter your pet's birthday"
                value={newAnimal.birthday}
                onChange={handleChange}/>
                {/* <DatePicker
                    value={startDate}
                    onChange={date => setStartDate(date)}
                /> */}

                <select>
                    <option value="cat">Cat</option>
                    <option value="dog">Dog</option>
                    <option value="fish">Fish</option>
                </select>
                <button>Create Animal</button>
            </form>
        </>
     );
}
 
export default AnimalForm;