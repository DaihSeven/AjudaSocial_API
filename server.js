// server.js
import express from 'express';
import cors from 'cors'
import resourceRoutes from './src/routes/resourceRoutes.routes.js'; // nome já está em inglês
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './src/docs/swaggerSpec.js';

const app = express();

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Redirect root to Swagger docs
app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

// Swagger documentation route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/docs', (req, res) => res.redirect('/api-docs')); // optional alias

// Main resource routes
app.use('/resources', resourceRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
