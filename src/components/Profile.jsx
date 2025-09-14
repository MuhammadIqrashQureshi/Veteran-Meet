import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Profile(props){
    const handleFollowRequest = async (evt) => {
		evt.preventDefault();
		const data = window.userData;
        data.followingVeterans.push(props.name);
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
	
	//Followers are not being reflected in the my profile page
	
	
	
	return (
        <div className="flex justify-center pb-20">
    <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
	<div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
		<img src="https://source.unsplash.com/100x100/?portrait?1" alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
	</div>
	<div className="flex flex-col space-y-4">
		<div>

			<h2 className="text-2xl font-semibold">{props.name}</h2>
			<p className="text-sm dark:text-gray-400"><b>Profession</b> : {props.profession}</p>
			<p className="text-sm dark:text-gray-400"><b>Hobbies</b> : {props.hobbies}</p>			
			<p className="text-sm dark:text-gray-400"><b>following Veterans</b> : {props.followingVeterans}</p>
			<p className="text-sm dark:text-gray-400"><b>Following ommunities</b> : {props.followingCommunities}</p>
			<p className="text-sm dark:text-gray-400"><b>Events Created</b> : {props.eventsCreated}</p>
			<p className="text-sm dark:text-gray-400"><b>Stars</b> : {props.startsCount}</p>
			<p className="text-sm dark:text-gray-400"><b>Category</b> : {props.category}</p>
			<p className="text-sm dark:text-gray-400"><b>Posts</b> : {props.posts}</p>

		</div>
		<div className="space-y-1">
			<span className="flex items-center space-x-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
					<path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
				</svg>
				<span className="dark:text-gray-400">{props.email}</span>
			</span>
			{/* <span className="flex items-center space-x-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phonenumber" className="w-4 h-4">
					<path fill="currentColor" d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"></path>
				</svg>
				<span className="dark:text-gray-400">+25 381 77 983</span>
			</span> */}
            <div className="flex justify-center">
            {/* <button className="m-4 px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900  hover:bg-violet-900 hover:text-white">follow</button>
            <button className="m-4 px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900  hover:bg-violet-900 hover:text-white">profile</button> */}
			<div className="m-4">
			<a onClick={handleFollowRequest} rel=" noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded bg-violet-400 text-gray-900 hover:bg-violet-800 hover:text-white">Follow</a>
			</div>
			<div className="m-4">
			<a rel="mx-8 noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded bg-violet-400 text-gray-900 hover:bg-violet-800 hover:text-white">Profile</a>
		    </div>
			</div>
		</div>
	</div>
    
</div>
</div>
    )
}

export default Profile;