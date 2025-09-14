import axios from "axios";
import { useState } from "react";
import {Link} from "react-router-dom";


function EditProfile(){

    const [name, setName] = useState(window.userData.name);
    const [password, setPassword] = useState(window.userData.password);
    const [email, setEmail] = useState(window.userData.email);
    const [profession, setProfession] = useState(window.userData.profession);
    const [hobbies, setHobbies] = useState(window.userData.hobbies);
    const [accountType, setAccountType] = useState(window.userData.accountType);

    // const navigate = useNavigate();

	function handlenamechange(event){
		setName(event.target.value);
	}

    function handleemailchange(event){
		setEmail(event.target.value);
	}

	function handlepasswordchange(event){
		setPassword(event.target.value);
	}

    function handleprofessionchange(event){
		setProfession(event.target.value);
	}

    function handlehobbieschange(event){
		setHobbies(event.target.value);
	}

    function handleaccountTypechange(event){
		setAccountType(event.target.value);
	}

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		
		const data = {
			name : name,
			password : password,
            email : email,
            hobbies : hobbies,
            profession : profession,
            accountType : accountType,
			starsCount : window.userData.starsCount,
			followers : window.userData.followers,
			following : window.userData.following,
			category : window.userData.category,
			posts : window.userData.posts
			
		}
        console.log("our data is : ",data);
		window.userData=data; 
		try {
            const url = 'http://localhost:4000/veterans//update-veteran/';
            const newurl= url.concat(name); 

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
    

    return <div>
        <section className="p-6 bg-gray-100 text-gray-900">
	<form  className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Profile Inormation</p>
				<p className="text-xs">Please fill in the form in order to create an account on veteranMeet!!</p>
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
					<p className="text-sm">Email</p>
					<input id="email" name="email" type="email" placeholder="Email"  onChange={handleemailchange} value={email} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full">
					<p className="text-sm">Password</p>
					<input id="password" name="password" type="text" placeholder="" onChange={handlepasswordchange} value={password} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<p className="text-sm">Profession</p>
					<input id="profession" name="profession" type="text" placeholder="" onChange={handleprofessionchange} value={profession} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<p className="text-sm">Hobbies</p>
					<input id="state" type="text" placeholder="" onChange={handlehobbieschange} value={hobbies} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 text-gray-900" />
				</div>
				{/* <div className="col-span-full sm:col-span-2">
					<p className="text-sm">Account Type</p>
					<input id="accountType" name="accountType" type="text" placeholder="" onChange={handleaccountTypechange} value={accountType} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 text-gray-900" />
				</div> */}
                
			</div>
            <button type="button" onClick={handleSubmit} className="px-4 py-2 border rounded-md border-gray-800 hover:bg-blue-400">Submit</button>
            <Link className="m-2 px-4 hover:underline bg-white hover:bg-red-500 hover:text-white border-4 text-center" to="/profile"> Back </Link>
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

export default EditProfile;