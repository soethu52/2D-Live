import express from 'express';
import resultRoute from './routes/results.js';
const app = express();
app.use(express.json());

app.use("/api", resultRoute);

app.listen(3001, () => {
    console.log("Server is running...");
});