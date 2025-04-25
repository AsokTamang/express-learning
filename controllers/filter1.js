import { startups } from "../data.js";
export const filter1=(req, res) => {
 
    const{industry,country,continent,is_seeking_funding,has_mvp}=req.query
    let filteredData=startups;
     if(industry){
       filteredData=filteredData.filter((item)=>(item.industry===industry))
  
     }
  
  if(country){
       filteredData=filteredData.filter((item)=>(item.country===country))
  
     }
     if(continent){
       filteredData=filteredData.filter((item)=>(item.continent===continent))
  
     }
     if(is_seeking_funding){
       filteredData=filteredData.filter((item)=>(item.is_seeking_funding.toString()===is_seeking_funding))
  
     }
     if(has_mvp){
       filteredData=filteredData.filter((item)=>(item.has_mvp.toString()===has_mvp))
  
     }  
 
  
    res.json(filteredData)
  
  }
