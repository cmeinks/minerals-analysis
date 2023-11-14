const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); // For parsing application/json

// Define routes here
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
