import { startups } from "../data.js"
export const filter2=(req,res)=>{
    let filteredData=startups
    const fields=['country','continent','industry']
    const {field,term}=req.params
    if(fields.includes(field)){
    filteredData=filteredData.filter((data)=>data[field].toLowerCase().toString()===term.toString().toLowerCase())
    res.json(filteredData)
    }
    else{
       
        res.status(400).json({message: "Search field not allowed. Please use only 'country', 'continent', 'industry'" })    //this code will send the response of showing an error with the msg given with the status code 400.
    }
    
}