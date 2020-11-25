import mongoose from 'mongoose'
export const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_CONNECTION, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true
        });

        console.log("Mongo connected", conn.connection.host)
    } catch (error) {
        console.error(error.message, error.stack)
        process.exit(1);
    }
}