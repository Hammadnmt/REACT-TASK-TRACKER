import Header from './Components/Header.js';
import Tasks from './Components/Tasks.js';
import AddTask from './Components/AddTask.js'


import { useState } from 'react';

function App() {
  const [showAddTask,setshowAddTask]=useState(true)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor Appointment',
      reminder: true,
      day: 'Monday'
    },
    {
      id: 2,
      text: 'Shopping',
      reminder: false,
      day: 'Wednesday'
    },
    {
      id: 3,
      text: 'Homework',
      reminder: true,
      day: 'Friday'
    }
  ]);
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => id === task.id ? { ...task, reminder: !task.reminder } : task))
  }
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  const addTask = (task) =>{ 
    const id = Math.floor(Math.random()*1000) +1;
    const newTask={id , ...task}
    setTasks([...tasks,newTask])
  }

  return (
    <div className='container'>
      <Header title='Task Tracker' onAdd={()=> setshowAddTask(!showAddTask)} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {
        tasks.length > 0 ? <Tasks tasks={tasks}
          onDelete={deleteTask} onToggle={toggleReminder} /> : 'Nothing'
      }


    </div>
  );
}

export default App;
