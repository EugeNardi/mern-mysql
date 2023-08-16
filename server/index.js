import express from "express";
import cors from "cors";
import { PORT } from "./config.js";

import indexRoutes from "./routers/index.routes.js"
import taskRoutes from "./routers/tasks.routes.js"


const app = express();
 

app.use(cors());
app.use(express.json());


app.use(indexRoutes);
app.use(taskRoutes);




app.listen(PORT)
console.log(`Server running on port ${PORT}`)




