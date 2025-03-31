import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;console.log('About to start server...');
console.log('Environment variables loaded:', process.env.PORT ? 'Yes' : 'No');

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});