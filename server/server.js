import app from './app.js';
import { connectDb } from './config/db.js';

//Connect to Mongo
connectDb();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is rnning on port: ${PORT}`)
})