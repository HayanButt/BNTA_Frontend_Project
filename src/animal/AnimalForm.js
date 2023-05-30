import { useState } from "react";
import DatePicker from 'react-date-picker';
const AnimalForm = () => {
    
    const [newAnimal, setNewAnimal] = useState({
        name: "",
        birthday:"",
        animalType: null
    });

    const [startDate, setStartDate] = useState(new Date());

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    return ( 
        <>
            <form>
                <input
                type="text"
                name="name"
                placeholder="Enter your pet's name"
                value={newAnimal.name} />
                {/* // onChange={handleChange}/> */}
                
                {/* <input
                type="date"
                name="birthday"
                placeholder="Enter your pet's birthday"
                value={newAnimal.birthday}
                onChange={date => setStartDate(date)}/> */}
                <DatePicker
                    value={startDate}
                    onChange={date => setStartDate(date)}
                    />
            </form>
        </>
     );
}
 
export default AnimalForm;