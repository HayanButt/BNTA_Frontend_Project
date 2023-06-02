import { useEffect, useState } from "react";
import AnimalList from "./AnimalList";
import TaskList from "../task/TaskList";
import AnimalForm from "./AnimalForm";
import TaskForm from "../task/TaskForm"
import './Animal.css'

const SERVER_URL = "http://localhost:8080"

const AnimalContainer = ({currentUser}) => {
    const [userAnimals, setUserAnimals] = useState([])
    const [completedTaskList, setCompletedTaskList] = useState([])
    const [currentUserTaskList, setCurrentUserTaskList] = useState([])
    const [showPet, setShowPet] = useState(false)
    const [showTask, setShowTask] = useState(false)

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


    const handleFormClickPet = () => {setShowPet((prev) => !prev)}
    const handleFormClickTask = () => {setShowTask((prev) => !prev)}


    return ( 
        <>
            <AnimalList userAnimals={userAnimals} deleteAnimal={deleteAnimal}/>

            <div className="list-header">
                <h3>Add new pet</h3>
            </div>

            <div className="form-container">
                <button onClick={handleFormClickPet}>{showPet === true? "Hide form" : "Show form"}</button>
                {showPet ? <AnimalForm saveAnimal={saveAnimal} currentUser={currentUser}/> : null}
            </div>
            
            <TaskList currentUserTaskList={currentUserTaskList} setCurrentUserTaskList={setCurrentUserTaskList} deleteTask={deleteTask} completedTasks={completedTasks} completedTaskList={completedTaskList}/>
            
            <div className="list-header">
                <h3>Add new task</h3>
            </div>

            <div className="form-container">
                <button onClick={handleFormClickTask}>{showTask === true? "Hide form" : "Show form"}</button>
                {showTask ? <TaskForm saveTask={saveTask} userAnimals={userAnimals}/> : null}
            </div>
        </>
     );
}
 
export default AnimalContainer;