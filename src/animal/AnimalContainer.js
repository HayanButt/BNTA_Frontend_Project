import { useEffect, useState } from "react";
import AnimalList from "./AnimalList";
import TaskList from "../task/TaskList";
import AnimalForm from "./AnimalForm";
import TaskForm from "../task/TaskForm"

const SERVER_URL = "http://localhost:8080"

const AnimalContainer = ({currentUser}) => {
    const [userAnimals, setUserAnimals] = useState([])
    const [completedTaskList, setCompletedTaskList] = useState([])
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

    // TASKS

    const postTask = (newTask) => {
        fetch (`${SERVER_URL}/tasks`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newTask)
        })
        .then ((response) => response.json())
        .then ((response) => {
            setCurrentUserTaskList([...currentUserTaskList, response])
        })
    }

    const saveTask =(task) => {
        console.log(JSON.stringify(task));
        postTask(task);
    }


    const deleteTask = (id) => {
        fetch(`${SERVER_URL}/tasks/${id}`, {
            method: "DELETE",
            headers: {"Content-Type" : "application/json"}
        })
        const newTask = currentUserTaskList.filter((task) => task.id !== id)
        setCurrentUserTaskList(newTask)
    }



    const completedTasks = (task) => {
        setCompletedTaskList([...completedTaskList, task])
    }

    const deleteTask = (id) => {
        fetch(`${SERVER_URL}/tasks/${id}`, {
            method: "DELETE",
            headers: {"Content-Type" : "application/json"}
        })
        const newTask = currentUserTaskList.filter((task) => task.id !== id)
        setCurrentUserTaskList(newTask)
    }


    return ( 
        <>
            <AnimalList userAnimals={userAnimals} deleteAnimal={deleteAnimal}/>

          
            <TaskList currentUserTaskList={currentUserTaskList} setCurrentUserTaskList={setCurrentUserTaskList} deleteTask={deleteTask} completedTasks={completedTasks} completedTaskList={completedTaskList}/>

            <AnimalForm saveAnimal={saveAnimal} currentUser={currentUser}/>
            <TaskForm saveTask={saveTask} userAnimals={userAnimals}/>
            
        </>
     );
}
 
export default AnimalContainer;