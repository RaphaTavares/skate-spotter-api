import express from "express";
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";
import cors from "cors";

import requireAuth from './middlewares/authMiddleware.js';
import authRoutes from './1- Presentation/routes/auth.js';
const port = process.env.PORT;

const app = express();

app.use(bodyParser.json());
app.use(cookieParser())
app.use(cors());

app.use(authRoutes);

app.use('/flag', requireAuth, (req, res) => res.status(200).json({flag: "You're logged in."}));

app.listen(port);
