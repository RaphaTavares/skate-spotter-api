import express from "express";
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";

import authRoutes from './1- Presentation/routes/auth.js';
import spotRoutes from './1- Presentation/routes/spot.js';

import requireAuth from './middlewares/authMiddleware.js';

const port = process.env.PORT;

const app = express();

app.use(bodyParser.json());
app.use(cookieParser())

app.listen(port, () => {
    console.log("server up and running");
})

app.use(authRoutes);

app.use(spotRoutes);

app.use('/flag', requireAuth, (req, res) => res.status(200).json({flag: "You're logged in."}));