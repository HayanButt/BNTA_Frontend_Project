import { useEffect, useState } from "react";
import AnimalList from "./AnimalList";

const AnimalContainer = ({currentUser}) => {
    const [animals, setAnimals] = useState([])
    const [usersAnimals, setUsersAnimals] = useState([])

    const fetchAnimals = async () => {
        const response = await fetch("http://localhost:8080/animals")
        const data = await response.json()
        setAnimals(data)
    }

    useEffect(()=> {
        fetchAnimals()
        findCurrentUsersAnimals()
    }, [currentUser])
    
    const findCurrentUsersAnimals =() => {
        if(currentUser.id !== null){
            const filteredAnimals = animals.filter((animal) => animal.user.id === currentUser.id)
            setUsersAnimals(filteredAnimals)
            console.log(filteredAnimals);
        }
    }

    return ( 
        <>
            <AnimalList animals={animals} usersAnimals={usersAnimals}/>
        </>
     );
}
 
export default AnimalContainer;