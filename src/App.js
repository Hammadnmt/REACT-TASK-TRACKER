import Header from './Components/Header.js';
import Tasks from './Components/Tasks.js';
import AddTask from './Components/AddTask.js'


import { useEffect, useState } from 'react';

function App() {
  const [showAddTask, setshowAddTask] = useState(true)
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchData();
      setTasks(taskFromServer);
    };

    getTasks();
  }, []);

  const fetchData = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    console.log(data)
    return data
  }
  const UpdateData = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    console.log(data)
    return data
  }

  //Updatting reminder
  const toggleReminder = async (id) => {
    const taskToToggle= await fetchData(id)
    const updateTask={...taskToToggle,reminder:!taskToToggle.reminder}
    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'PUT',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(updateTask)
    })
    const data = await res.json()
  setTasks(tasks.map((task) => id === task.id ? { ...task, reminder: data.reminder } : task))
  }

  //Deleting Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Adding new Task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task)
    })
    const data = await res.json();

    // const id = Math.floor(Math.random() * 1000) + 1;
    // const newTask = { id, ...task }
    setTasks([...tasks, data])
  }

  return (
    <div className='container'>
      <Header title='Task Tracker' onAdd={() => setshowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {
        tasks.length > 0 ? <Tasks tasks={tasks}
          onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Task Yet'
      }


    </div>
  );
}

export default App;
