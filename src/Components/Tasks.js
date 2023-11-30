import Task from './Task';

const Tasks = ({ tasks,OnDelete }) => {
  return (
    <>
      {tasks.map((task) => (
        // Passing props
        <Task key={task.id} task={task} OnDelete={OnDelete} />
      ))}
    </>
  );
};

export default Tasks;
