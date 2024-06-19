// client/src/components/TaskItem.js
import React from 'react';
import axios from 'axios';

function TaskItem({ task, onDelete, onToggle }) {
  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/api/tasks/${task.id}`);
    onDelete(task.id);
  };

  const handleToggle = async () => {
    await axios.put(`http://localhost:5000/api/tasks/${task.id}`, { completed: !task.completed });
    onToggle(task.id);
  };

  return (
    <li className={`list-group-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      {task.title}
      <button className="btn btn-danger btn-sm" onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TaskItem;



