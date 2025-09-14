import Community from "./components/Community";
import {useEffect,useState} from 'react'

function FindCommunity(){
    const [data,setData] = useState([])
    
      useEffect(()=>{
        fetch('http://localhost:4000/community').then(res => res.json()).then(data => {
          setData(data);
        }).catch(e=>console.log(e.message));
      },[])
    
       console.log(data);
    return (
        <div className="p-8 flex flex-col  flex-wrap">
        <h1 className="text-center border-black border-4 bg-blue-400 m-8">Find Communities</h1>
            {data.map(item =>{
            return   <Community 
                name= {item.name}
                email = {item.email}
                followers = {item.followers}
                about = {item.about}
                accountType = {item.accountType}
            />
        })}
           
            {/* <Community />
            <Community /> */}
        </div>
    )
}

export default FindCommunity;