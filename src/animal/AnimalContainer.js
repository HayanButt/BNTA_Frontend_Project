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
    }, [])
    
    const findCurrentUsersAnimals =() => {
        const filteredAnimals = animals.filter((animal) => animal.user.id === currentUser.id)
        setUsersAnimals(filteredAnimals)
    }

    return ( 
        <>
            <AnimalList usersAnimals={usersAnimals}/>
            <h1>animal</h1>
        </>
     );
}
 
export default AnimalContainer;