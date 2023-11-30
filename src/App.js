import Header from './Components/Header.js';
import Task from './Components/Task.js';
import Tasks from './Components/Tasks.js';

import { useState } from 'react';

function App() {
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
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className='container'>
      <Header title='Task Tracker' />
      {
        tasks.length > 0 ? <Tasks tasks={tasks}
          OnDelete={deleteTask} /> : 'Nothing'
      }

    </div>
  );
}

export default App;
