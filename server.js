import express from 'express';
import recursoRoutes from './src/routes/recursoRoutes.routes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './src/docs/swaggerSpec.js';

const app = express();

app.use(express.json()); 

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/docs', (req, res) => res.redirect('/api-docs')); 

app.use('/recursos', recursoRoutes); 

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});