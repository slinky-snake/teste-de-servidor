import express from 'express';
import publicRoutes from './routes/public.js';

const app = express();

app.use(express.json());
app.use('/api', publicRoutes);

app.listen(300, () => console.log("hewooo, ta rodando 0w0"));
