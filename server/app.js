// server/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database');
const taskRoutes = require('./routes/tasks');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
