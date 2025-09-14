import Profile from "./components/Profile"
import {useEffect,useState} from 'react'
import CreatePost from "./components/CreatePost";
function FindVeterans(){
      const [data,setData] = useState([])
      useEffect(()=>{
        fetch('http://localhost:4000/veterans/').then(res => res.json()).then(data => {
          setData(data);
        }).catch(e=>console.log(e.message));
      },[])
    
       console.log(data);
    return(
       <div className="p-8 flex flex-col  flex-wrap">
       <h1 className="text-center border-black border-4 bg-blue-400 m-8 ">Find Veterans</h1>
        {data.map(item =>{
            return (
            <div>
              <Profile 
                name={item.name}
                email={item.email} 
                profession={item.profession}
                hobbies= {item.hobbies}
                followingVeterans = {item.followingVeterans}
                followingCommunities = {item.followingCommunities}
                accountType = {item.accountType}
                eventsCreated = {item.eventsCreated}
                eventsInterested = {item.eventsInterested}
                starsCount = {item.starsCount}
                category = {item.category}
                posts = {item.posts}
              />
            </div>
            )
        })}
        </div>
    )
}

export default FindVeterans;