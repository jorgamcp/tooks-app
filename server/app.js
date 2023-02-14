import  express  from "express";

import { dirname } from 'path';
import { fileURLToPath } from "url";
import path from "path";

import tookRoutes from "./routes/took.routes.js";
import cors from "cors";

const app = express();

// const __dirname = dirname(fileURLToPath(import.meta.url));


app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api',tookRoutes);

export { app };