import express, { Request, Response } from "express";
import cors from "cors"

const app = express();

//Cors and JSON middleware
app.use(express.json());
app.use(cors())

//Port definition
const PORT = process.env.PORT || 3000;

//Getting date
const currentDate = new Date();
const ISOFormatDate = currentDate.toISOString();

//API endpoint
app.get("/api/v1", (req:Request, res:Response)=>
{
    res.status(200).json({email: "selasisepenu5@gmail.com",current_datetime: ISOFormatDate,github_url:"https://github.com/Selasie5/hng-task-1"})
})

app.listen(PORT, ()=>
{
    console.log(`✅ Server has started listening on PORT ${PORT}`)
})