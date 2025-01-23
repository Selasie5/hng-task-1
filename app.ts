import express, { Request, Response } from "express";
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 3000;

const currentDate = new Date();
const ISOFormat = currentDate.toISOString();

app.get("/api/v1", (req:Request, res:Response)=>
{
    res.json({email: "selasisepenu5@gmail.com",current_datetime: currentDate,github_url:"https://github.com/Selasie5/hng-task-1"})
})

app.listen(PORT, ()=>
{
    console.log(`✅ Server has started listening on PORT ${PORT}`)
})