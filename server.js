import express from "express"
import { apiroute } from "./routes/apiroute.js";
const app=express();
app.use('/api',apiroute)    //here our app is using the apiroute which is the instance of express.Router() that handles the controller having their own endpoints.
app.use((req,res)=>{          //here our app is using that apiroute for returning the response to the user.
    res.status(404).json({message:"Endpoint not found. Please check the API documentation."})
})
app.listen(8000,()=>(console.log('server is connected')))