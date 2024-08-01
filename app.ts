import { Request, Response, Express } from "express";
import express from 'express'
import AppDataSource   from "./db/dbConfig.js"



const app: Express = express();
const PORT =process.env.PORT||5000

app.use(express.json())

AppDataSource.initialize().then(() => {
    console.log("connected to DB");
}).catch(err => {
    console.error('Failed to connect to DB: ' + err);
});



let Server = app.listen(PORT, () => {

    console.log("port is running on the " + PORT);
});







