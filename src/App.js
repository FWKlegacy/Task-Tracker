import React from 'react';
import "./index.css";
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState} from "react";
import Add from './components/Add';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      Day: "Feb 5th at 1:30pm",
      reminder: "true",
    },
    {
      id: 2,
      text: "Meeting at School",
      Day: "Feb 6th at 2:30pm",
      reminder: "true",
    },
    {
      id: 3,
      text: "Food Shopping",
      Day: "Feb 7th at 1:00pm",
      reminder: "false",
    },
  ]);
  //add task

  //Delete Task

  const deleteTask =(id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  };
  
  //handle toggle reminder
  const toggleReminder =(id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  };
    return (
      <div className="container">
        <Header />
        <Add/>
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      </div>
    );
  };

export default App;
