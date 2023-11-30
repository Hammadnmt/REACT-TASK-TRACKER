import { FaTimes } from 'react-icons/fa'
const Task = ({ task, OnDelete }) => {
    return (
        <div className='task'>
            <h3>
                {task.text}{' '} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => OnDelete(task.id)} />
            </h3>
            <p>
                {task.day}
            </p>
            <p>
                {task.reminder ? 'Reminder Set' : 'Not Set'}
            </p>


        </div>
    )
}

export default Task
