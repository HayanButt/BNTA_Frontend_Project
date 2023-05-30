import { useEffect, useState } from "react";
import AnimalList from "./AnimalList";
import TaskList from "../task/TaskList";
import AnimalForm from "./AnimalForm";


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
            <AnimalForm />
            
        </>
     );
}
 
export default AnimalContainer;