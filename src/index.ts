import 'reflect-metadata';
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import {createConnection} from 'typeorm'
import productRoutes from './routes/product.routes'
import categoryRoutes from './routes/category.routes'

const app = express()
createConnection();

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use(productRoutes,categoryRoutes);

app.listen(3000);
console.log('Server on port', 3000);