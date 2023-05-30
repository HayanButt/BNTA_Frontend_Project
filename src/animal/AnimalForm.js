import { useState } from "react";
// import DatePicker from 'react-date-picker';
const AnimalForm = ({saveAnimal, currentUser}) => {
    
    const [newAnimal, setNewAnimal] = useState({
        userId: currentUser.id,
        name: "",
        birthday:"",
        animalType: null
    });

    const handleChange =(event) => {
        const propertyName = event.target.name
        const copiedAnimal = {...newAnimal}
        copiedAnimal[propertyName] = event.target.value
        setNewAnimal(copiedAnimal)
    }

    const handleChangeType = (event) => {
        const propertyName = event.target.name;
        const copiedAnimal = {...newAnimal};
        copiedAnimal[propertyName] = event.target.id;
        setNewAnimal(copiedAnimal);
      }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        saveAnimal(newAnimal);
        setNewAnimal({
          userId: currentUser.id, 
          name: "",
          birthday: "date",
          animalType: null
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

                <select onChange={handleChangeType} name="animalType">
                    <option id="1" value="cat">Cat</option>
                    <option id="2" value="dog">Dog</option>
                    <option id="3" value="fish">Fish</option>
                </select>
                <button type="submit">Create Animal</button>
            </form>
        </>
     );
}
 
export default AnimalForm;