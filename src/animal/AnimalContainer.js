import { useEffect, useState } from "react";
import AnimalList from "./AnimalList";
import TaskList from "../task/TaskList";


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

    return ( 
        <>
            <AnimalList userAnimals={userAnimals}/>
            <TaskList currentUserTaskList={currentUserTaskList}/>
            
        </>
     );
}
 
export default AnimalContainer;