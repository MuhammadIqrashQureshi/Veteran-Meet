import Event from "./components/Event"
import { Link } from "react-router-dom"
import {useEffect,useState} from 'react'

function FindEvent(){
    const [data,setData] = useState([])
    
      useEffect(()=>{
        fetch('http://localhost:4000/veterans/event').then(res => res.json()).then(data => {
          setData(data);
        }).catch(e=>console.log(e.message));
      },[])
    
       console.log(data);

       
    return (
        <div className="p-8 flex flex-col  flex-wrap">
        <h1 className="text-center border-black border-4 bg-blue-400 m-8 ">Find Events</h1>
        <div className="flex justify-center">
        <Link to="/create-event" className="mx-4 px-2 py-1 font-bold w-30 rounded bg-blue-400 text-gray-900 hover:bg-blue-800 hover:text-white text-center">Create Event</Link>
        </div>
        {data.map(item =>{
            return  <Event 
                name = {item.name}
                categoryType = {item.categoryType}
                date = {item.date}
                venue = {item.venue}
                description = {item.description}
                stars = {item.stars}
                creator = {item.creator}
                interested = {item.interested}
            />
        })}
            
            
        </div>

    )
}
export default FindEvent;