import PropTypes from "prop-types";
import Task from "./Task";

const Tasks = ({ tasks, deleteTask, onToggle }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

Tasks.prototype = {
  tasks: PropTypes.string.isRequired,
};

export default Tasks;
