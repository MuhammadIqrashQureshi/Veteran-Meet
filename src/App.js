import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import FindVeterans from "./FindVeterans";
import FindEvent from "./FindEvent";
import FindCommunity from "./FindCommunity";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyProfile from "./MyProfile";
import { useEffect } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import EditProfile from "./components/EditProfile";
import CreateEvent from "./components/CreateEvent";
import CreatePost  from "./components/CreatePost";
import Type from "./components/Type";

// import Signup from "./Signup";

//create your forceUpdate hook
// function useForceUpdate(){
//   console.log("the window value is : ",window.loggedIn); 
//   const [value, setValue] = useState(0); // integer state
//     return () => setValue(value => value + 1); // update state to force render
//     // An function that increment 👆🏻 the previous state like here 
//     // is better than directly setting `value + 1`
    
// }



function App() {
  const [log,setlog] = useState(window.loggedIn)
  function changeValue(){
    return setlog(log => !log)
  }
 
  // useEffect(() => {
  //   console.log("I Only run once (When the component gets mounted)")
  //   setlog(window.loggedIn)
  //   console.log(log);
  // }, [log]);
  
  return (

    <div>
    <Header />
    {
      log===false?(
        <div>
        <BrowserRouter>
  <Routes>
  <Route path="/" element={<Login ftn={changeValue} />} />
     <Route path="/signup" element={<Signup />} />
     
    <Route path="/*" element={<h1>error 404 the page is not found</h1>} /> */}
  </Routes>
</BrowserRouter>
        
        </div>
        
        ):(<div>
{/* <button className="px-2 py-1 font-bold rounded bg-violet-400 text-gray-900 hover:bg-violet-800 hover:text-white float-right" onClick={changeValue}>Logout</button> */}

<BrowserRouter>
  <Type ftn={changeValue}/>
  <Nav ftn={changeValue}/>
  <Routes>
  <Route path="/" element={<Home />} />
     <Route path="/veterans" element={<FindVeterans />} />
     <Route path="/events" element={<FindEvent />} />
     <Route path="/communities" element={<FindCommunity />} />
     <Route path="/profile" element={<MyProfile />} />
     <Route path="/editprofile" element={<EditProfile />} />
     <Route path="/create-event" element={<CreateEvent />} />
     <Route path="/createpost" element={<CreatePost />} />
     <Route path="/*" element={<h1>error 404 the page is not found</h1>} /> */}
  </Routes>
  
</BrowserRouter>
</div>)
    }
    <Footer />
    </div>
  );
}
export default App;