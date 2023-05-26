import UserContainer from './user/UserContainer'
import TaskContainer from './task/TaskContainer'
import AnimalContainer from './animal/AnimalContainer'
import FooterContainer from './footer/FooterContainer';
import './App.css';
import {useState, useEffect} from 'react'

function App() {

  const [users, setUsers] = useState([]);


  const fetchAPI = async ()  => {
    const response = await fetch("http://localhost:8080/users");
    const data = await response.json();
    
    setUsers(data);
  }

  useEffect(() => {
    fetchAPI()
  } ,[])
  
  console.log(users)






  return (
    <>
      <UserContainer users={users} />
      <TaskContainer />
      <AnimalContainer />
      <FooterContainer />
    </>


  );
}

export default App;
