const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authRoutes = require('./auth');
const resumeRoutes = require('./routes/resumeRoutes');
const cors = require('cors');

// Apply CORS middleware before routes
app.use(cors());  // This allows all origins, you can configure it further if necessary

app.use(bodyParser.json()); // Middleware to parse incoming JSON requests
app.use('/api/auth', authRoutes); 
app.use('/api/resumeRoutes', resumeRoutes);   
// Routes for auth (login, register, etc.)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
