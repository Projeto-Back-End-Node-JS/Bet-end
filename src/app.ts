import { errorMiddleware } from "./middleware/error.middleware";
import "reflect-metadata";
import "express-async-errors";
import express from "express";
import routes from "./routes/routes";
import "dotenv/config";

const app = express();
app.use(express.json());

app.use(routes);

app.use(errorMiddleware);

export default app;
