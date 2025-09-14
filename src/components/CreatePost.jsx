import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function CreatePost(props){
	const [posts, setPosts] = useState("");
	function handlepostchange(event){
		setPosts(event.target.value);
	}


	const handleSubmit = async (evt) => {
		evt.preventDefault();
		const data = {
			posts:posts,
		}
		console.log("our data is : ",data);
		const newData = window.userData;
		newData.posts.push(posts);
		try {
            const url = 'http://localhost:4000/veterans//update-veteran/';
            const newurl= url.concat(newData.name); 
			const response = await axios.put(newurl,data);			
			console.log("the data is ",response.data);
            console.log("the data is successfully updated");
			window.userData=newData;
		} catch (error) {
		  console.log("Error",error);
		}	
	}
			
    

    return <div>
        <section className="p-6 bg-gray-100 text-gray-900">
	<form  className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">What do you want to post?</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<p className="text-sm">Enter the text that you want to post: </p>
					<input id="post" name="post" type="text" placeholder="post" onChange={handlepostchange} value={posts} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 text-gray-900" />
				</div>
			</div>
            <button type="button" onClick={handleSubmit} className="px-4 py-2 border rounded-md border-gray-800 hover:bg-blue-400">Create</button>
            <Link className="m-2 px-4 hover:underline bg-white hover:bg-red-500 hover:text-white border-4 text-center" to="/"> Back </Link>
		</fieldset>
		
        
	</form>
</section>
    </div>
}

export default CreatePost;