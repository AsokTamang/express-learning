import express from 'express'
import { startups } from './data.js';
const app=express();    //this is an app which stores the instance of an express.
const data={name:'Asok',age:'24',life:'Amazing'}
app.get('/api',(req,res)=>
{
    let filteredData = startups.filter((item)=>(!req.query.industry||item.industry===req.query.industry&&!req.query.country||item.country===req.query.country&&!req.query.continent||item.continent===req.query.continent&&!req.query.is_seeking_funding||item.is_seeking_funding.toString()===req.query.is_seeking_funding&&!req.query.has_mvp||item.has_mvp.toString()===req.query.has_mvp))
        res.json(data)})          //our app returns the response of the data in json format if the request is get at the endpoint /api.
 

app.listen(8000,()=>console.log('server is started.'))   //our app is running at the server 8000.