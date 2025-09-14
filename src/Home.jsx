import MyStream from "./components/MyStream"
import { useState, useEffect} from "react";
function Home(){
      const [data,setData] = useState([])
      useEffect(()=>{
        fetch('http://localhost:4000/veterans/').then(res => res.json()).then(data => {
          setData(data);
        }).catch(e=>console.log(e.message));
      },[])
      return(
        <div className="p-8 flex flex-col  flex-wrap">
        <h1 className="text-center border-black border-4 bg-blue-400 m-8 ">Keep Scrolling!</h1>
        {/* {data.map(item =>{
             //console.log("Following : ",item.followingVeterans)
             
         })} */}
         {data.map(item =>{
             return (
             <div>
               <MyStream 
                 name={item.name}
                 posts = {item.posts}
               />
             </div>
             )
         })}
         </div>
     )


    // return(
    //   <div className="p-8 flex flex-col  flex-wrap ">
    //   <h1 className="text-center border-black border-4 bg-blue-400 m-8">Home Page</h1>
    //     <Posts />
    //     <Posts />
    //     <Posts />
        
        
    //   </div>
    // )
}

export default Home;