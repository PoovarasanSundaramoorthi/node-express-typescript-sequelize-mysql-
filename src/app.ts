import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import taskRoutes from "./routes/taskRoutes";
import sequelize from "./config/database";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/tasks", taskRoutes);
app.get('/api', (req: Request, res: Response) => {
    res.status(200).json({
        message: "Api is working fine"
    })
})

app.use('*', (req: Request, res: Response) => {
    res.status(404).json({
        message: 'Request not found'
    })
})

// Sync Database
sequelize.sync().then(() => {
    console.log("Database connected and synced!");
});

export default app;
