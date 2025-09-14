import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Event(props){

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		
		const data = window.userData;
        data.eventsInterested.push(props.name);
		data.starsCount+=parseInt(props.stars);
		
		let cat = "Sliver Veteran";
		
		if(data.starsCount<= 25000){
			cat = "Silver Veteran";
		}else if (data.starsCount> 25000 && data.starsCount<=40000){
			cat = "Ruby Veteran";
		}else if (data.starsCount>40000 && data.starsCount<=50000){
			cat = "Golden Veteran";
		}else if (data.starsCount>50000 && data.starsCount<=60000){
			cat = "Diamond Veteran";
		}else if (data.starsCount>60000 && data.starsCount<=65000){
			cat = "Sapphire Veteran";
		}else if (data.starsCount>65000 && data.starsCount<=70000){
			cat = "Ruby Veteran";
		}else{
			cat = "Eternal Stage";
		}
		data.category=cat;
		console.log("our data is : ",data);
		 
		try {
            const url = 'http://localhost:4000/veterans//update-veteran/';
            const newurl= url.concat(data.name); 

			// const response = await axios.post("http://localhost:4000/veterans//update-veteran/",data);
			const response = await axios.put(newurl,data);			
		//	navigate('/menu');
			// console.log("the data length is ",response.data.length);
			console.log("the data is ",response.data);
            console.log("the data is successfully updated");
			window.userData=data;
		} catch (error) {
		  console.log("Error",error);
		}
		
	}
    
    return (
        <div className="flex justify-center pb-20">
           <div className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
		<div className="flex items-center justify-between">
			<span className=" text-sm dark:text-gray-400">Date : {props.date}</span>
			<Link onClick={handleSubmit} className="mx-4 px-2 py-1 font-bold rounded bg-blue-400 text-gray-900 hover:bg-blue-800 hover:text-white">Mark as Interested</Link>
		</div>
		<div className="mt-3">
			<h2 className="text-2xl font-bold">{props.name}</h2>
			<p className="mt-2">{props.description}</p>
		</div>
		<div className="flex  flex-col mt-4">
			<p  className=" dark:text-violet-400"><b>Venue </b>: {props.venue}</p>
			<p  className=" dark:text-violet-400"><b>category </b>: {props.categoryType}</p>
			<p  className=" dark:text-violet-400"><b>Stars </b>: {props.stars}</p>
			<p  className=" dark:text-violet-400"><b>Creator </b>: {props.creator}</p>
			<p  className=" dark:text-violet-400"><b>Interested </b>: {props.interested}</p>
			
			{/* <div>
				<a rel="noopener noreferrer" href="#" className="flex items-center">
					<img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
					<span className="hover:underline dark:text-gray-400">visit Leroy Jenkins</span>
				</a>
			</div> */}
		</div>
	</div>
</div>
        </div>
    )
}
export default Event;