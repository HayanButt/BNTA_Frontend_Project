import { useEffect, useState } from "react";
import AnimalList from "./AnimalList";

const AnimalContainer = ({currentUser}) => {
    const [userAnimals, setUserAnimals] = useState([])

    useEffect(()=> {
        if (currentUser.id) {
            setUserAnimals(currentUser.animals)
        }
    }, [currentUser])

    return ( 
        <>
            <AnimalList userAnimals={userAnimals}/>
        </>
     );
}
 
export default AnimalContainer;