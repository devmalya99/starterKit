import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import {errorHandler} from './utils/errorHandler.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Database connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);

// Error handling
app.use(errorHandler);


//your wildcard route for handling undefined routes
app.all('*', (req, res) => {
    res.status(404).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>404 - Page Not Found</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f9;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    color: #333;
                }

                .container {
                    text-align: center;
                    background-color: #fff;
                    padding: 40px;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    max-width: 400px;
                    width: 100%;
                }

                h1 {
                    font-size: 60px;
                    color: #e74c3c;
                    margin-bottom: 20px;
                }

                p {
                    font-size: 18px;
                    color: #555;
                }

                .btn {
                    display: inline-block;
                    margin-top: 20px;
                    padding: 12px 24px;
                    font-size: 16px;
                    background-color: #3498db;
                    color: #fff;
                    text-decoration: none;
                    border-radius: 5px;
                    transition: background-color 0.3s ease;
                }

                .btn:hover {
                    background-color: #2980b9;
                }
            </style>
        </head>
        <body>

            <div class="container">
                <h1>404</h1>
                <p>Page Not Found please go back to home page</p>
                <a href="/" class="btn">Go Back Home</a>
            </div>

        </body>
        </html>
    `);
});

export default app;