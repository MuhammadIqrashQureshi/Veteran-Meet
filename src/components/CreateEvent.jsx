import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function CreateEvent(){

    const [name, setName] = useState("");
    const [categoryType, setcategoryType] = useState("");
    const [date, setdate] = useState("");
    const [venue, setvenue] = useState("");
    const [description, setdescription] = useState("");
    const [stars, setstars] = useState("");

    // const navigate = useNavigate();

	function handlenamechange(event){
		setName(event.target.value);
	}

    function handlecategoryTypechange(event){
		setcategoryType(event.target.value);
	}

	function handledatechange(event){
		setdate(event.target.value);
	}

    function handlevenuechange(event){
		setvenue(event.target.value);
	}

    function handledescriptionchange(event){
		setdescription(event.target.value);
	}

    function handlestarschange(event){
		setstars(event.target.value);
	}

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		
		const data = {
			name : name,
			categoryType : categoryType,
            date : date,
            venue : venue,
            description : description,
            stars : stars,
            creator : window.userData.name,

		}
        console.log("our data is : ",data);

		const newData = window.userData;
		newData.eventsCreated.push(name)
		 
		try {
            // const url = 'http://localhost:4000/veterans///create-event/';
            // const newurl= url.concat(name); 
			const url = 'http://localhost:4000/veterans//update-veteran/';
            const newurl= url.concat(data.name); 

			const response = await axios.post("http://localhost:4000/veterans//create-event/",data);
			const newresponse = await axios.put(newurl,data);			

			// const response = await axios.put(newurl,data);			
		//	navigate('/menu');
			// console.log("the data length is ",response.data.length);
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
				<p className="font-medium">Event Inormation</p>
				<p className="text-xs">Please fill in the form in order to create an event on veteranMeet!!</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<p className="text-sm">Name</p>
					<input id="name" name="name" type="text" placeholder="name" onChange={handlenamechange} value={name} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 text-gray-900" />
				</div>
				{/* <div className="col-span-full sm:col-span-3">
					<p  className="text-sm">Last name</p>
					<input id="lastname" type="text" placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 text-gray-900" />
				</div> */}
				<div className="col-span-full sm:col-span-3">
					<p className="text-sm">Category</p>
					<input id="categoryType" name="categoryType" type="text" placeholder="category"  onChange={handlecategoryTypechange} value={categoryType} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full">
					<p className="text-sm">Date</p>
					<input id="date" name="date" type="text" placeholder="" onChange={handledatechange} value={date} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<p className="text-sm">Venue</p>
					<input id="venue" name="venue" type="text" placeholder="" onChange={handlevenuechange} value={venue} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<p className="text-sm">Description</p>
					<input id="description" type="text" placeholder="" onChange={handledescriptionchange} value={description} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<p className="text-sm">Set Stars</p>
					<input id="stars" name="stars" type="text" placeholder="" onChange={handlestarschange} value={stars} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 text-gray-900" />
				</div>
                
			</div>
            <button type="button" onClick={handleSubmit} className="px-4 py-2 border rounded-md border-gray-800 hover:bg-blue-400">Create</button>
            <Link className="m-2 px-4 hover:underline bg-white hover:bg-red-500 hover:text-white border-4 text-center" to="/event"> Back </Link>
		</fieldset>
		{/* <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Profile</p>
				<p className="text-xs">Adipisci fuga autem eum!</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label for="username" className="text-sm">Username</label>
					<input id="username" type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="website" className="text-sm">Website</label>
					<input id="website" type="text" placeholder="https://" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full">
					<label for="bio" className="text-sm">Bio</label>
					<textarea id="bio" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 text-gray-900" spellcheck="false"></textarea>
				</div>
				<div className="col-span-full">
					<label for="bio" className="text-sm">Photo</label>
					<div className="flex items-center space-x-2">
						<img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 rounded-full bg-gray-500 bg-gray-300" />
						<button type="button" className="px-4 py-2 border rounded-md border-gray-800">Create Account</button>
					</div>
				</div>
			</div>
		</fieldset> */}
        
	</form>
</section>
    </div>
}

export default CreateEvent;