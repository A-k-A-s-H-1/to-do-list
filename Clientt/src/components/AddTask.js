// client/src/components/AddTask.js
import React, { useState } from 'react';
import axios from 'axios';

function AddTask({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim()) {
      const response = await axios.post('http://localhost:5000/api/tasks', { title });
      onAdd(response.data);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline">
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="New Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="btn btn-primary mb-2">Add Task</button>
    </form>
  );
}

export default AddTask;

