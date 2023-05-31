import { useState, useEffect } from "react";
// import DatePicker from 'react-date-picker';
const AnimalForm = ({saveAnimal, currentUser}) => {
    
    const [newAnimal, setNewAnimal] = useState({
        name: "",
        birthday:"",
        animalTypeId: null
    });

    useEffect(() => {
        const updatedAnimal = {...newAnimal, userId: currentUser.id}
        setNewAnimal(updatedAnimal);
    }, [currentUser])


    const handleChange =(event) => {
        const propertyName = event.target.name
        const copiedAnimal = {...newAnimal}
        copiedAnimal[propertyName] = event.target.value
        setNewAnimal(copiedAnimal)
    }


    const handleFormSubmit = (event) => {
        event.preventDefault();
        saveAnimal(newAnimal);
        setNewAnimal({
          userId: currentUser.id, 
          name: "",
          birthday: "date",
          animalTypeId: null
        })
      }
    
    return ( 
        <>
            <form onSubmit={handleFormSubmit}>
                
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

                <select onChange={handleChange} name="animalTypeId">
                    <option disabled-value="select-animal-type">Select an animal type</option>
                    <option value={1}>Cat</option> 
                    <option value={2}>Dog</option>
                    <option value={3}>Fish</option>
                </select>
                <button type="submit">Create Animal</button>
            </form>
        </>
     );
}
 
export default AnimalForm;