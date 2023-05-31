import { useEffect, useState } from "react";
import AnimalList from "./AnimalList";
import TaskList from "../task/TaskList";
import AnimalForm from "./AnimalForm";

const SERVER_URL = "http://localhost:8080"

const AnimalContainer = ({currentUser}) => {
    const [userAnimals, setUserAnimals] = useState([])
    const [currentUserTaskList, setCurrentUserTaskList] = useState([])

    useEffect(()=> {
        if (currentUser.id) {
            setUserAnimals(currentUser.animals)
            // loop through map 
            const foundTasks = currentUser.animals.map((animal) => {
                return animal.tasks
            }).flat()
            setCurrentUserTaskList(foundTasks);
        }
    }, [currentUser])

    const saveAnimal =(animal) => {
        console.log(animal);
        postAnimal(animal);
      }

    const postAnimal = (newAnimal) => {
        fetch (`${SERVER_URL}/animals`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newAnimal)
        })
        .then ((response) => response.json())
        .then ((response) => {
            setUserAnimals([...userAnimals, response])
        })
    }

    const deleteAnimal = (id) => {
        fetch(`${SERVER_URL}/animals/${id}`, {
            method: "DELETE",
            // headers: {"Content-Type": "application/json"},
        })
        const newAnimal = userAnimals.filter((animal) => animal.id !== id);
        setUserAnimals(newAnimal);
    };





    return ( 
        <>
            <AnimalList userAnimals={userAnimals} deleteAnimal={deleteAnimal}/>
            <TaskList currentUserTaskList={currentUserTaskList}/>
            <AnimalForm saveAnimal={saveAnimal} currentUser={currentUser}/>
            
        </>
     );
}
 
export default AnimalContainer;