// client/src/components/TaskList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';
import AddTask from './AddTask';
import jsPDF from 'jspdf';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data);
    };

    fetchTasks();
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = async (id) => {
    const taskToToggle = tasks.find(task => task.id === id);
    const updatedTask = { ...taskToToggle, completed: !taskToToggle.completed };
    await axios.put(`http://localhost:5000/api/tasks/${id}`, updatedTask);
    setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    tasks.forEach((task, index) => {
      doc.text(20, 10 + (index * 10), `${task.completed ? '[X]' : '[ ]'} ${task.title}`);
    });
    doc.save('tasks.pdf');
  };

  return (
    <div>
      <AddTask onAdd={addTask} />
      <ul className="list-group mt-3">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onDelete={deleteTask} onToggle={toggleTask} />
        ))}
      </ul>
      <button className="btn btn-secondary mt-3" onClick={downloadPDF}>Download PDF</button>
    </div>
  );
}

export default TaskList;
