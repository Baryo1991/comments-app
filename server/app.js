import express from 'express'
import cors from 'cors'
import commentRoutes from './routes/commentRoutes.js'
import morgan from 'morgan';
import dotenv from 'dotenv'
import AppError from './errors/AppError.js';
import handlerError from './controllers/errorController.js';
const error = dotenv.config({ path: './server/config.env' }).error;
error && console.log(error)

const app = express();

//Middleware

//Development logging
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// body-parser
app.use(express.json())

//cross-origin
app.use(cors());


//Routes
app.use(`${process.env.BASE_URL}/comments`, commentRoutes);

//Page not found
app.use('*', (req, res, next) => {
    next(new AppError(`Could not find any route by that url: ${req.url}`, 404))
})

//Error controller
app.use(handlerError)
 
export default app;