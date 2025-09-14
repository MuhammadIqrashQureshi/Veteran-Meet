import axios from "axios";
import { useState } from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";



function Login(props){
	const navigate = useNavigate();


	const [name, setName] = useState("");
    const [password, setPassword] = useState("");
	// const navigate = useNavigate();

	function handlenamechange(event){
		setName(event.target.value);
	}

	function handlepasswordchange(event){
		setPassword(event.target.value);
	}

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		
		const data = {
			name : name,
			password : password
		}
		const url = 'http://localhost:4000/veterans/edit-veteran/'
		const newurl= url.concat(name); 
		try {
//			const response = await axios.get("http://localhost:4000/veterans/edit-veteran/"+name,data);
			const response = await axios.get(newurl,data);			
		//	navigate('/menu');
			
			console.log("the data that is here : ",response.data);
			
			if(response.data){
				if(response.data[0].password===data.password){
					window.loggedIn= true;
					console.log("the password is matched")
					window.userData=response.data[0];
					console.log("after login response data is :",response.data)
					navigate("/");
					props.ftn();
				}
				else{
					console.log("the password is incorrect")
				}
			}
			
		} catch (error) {
		  console.log("Error",error);
		}
		setName("");
		setPassword("");
	}
    
    return <div className="flex items-center justify-center text-center bg-gray-50 text-gray-800">
	<div className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg text-gray-800 ng-untouched ng-pristine ng-valid ng-submitted">
		<h6 className="self-start text-xs font-semibold">Username or Email</h6>
		<input id="username" name="username" type="text" onChange={handlenamechange} value={name} className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-violet-600 focus:ring-violet-600" />
		<h6 className="self-start mt-3 text-xs font-semibold">Password</h6>
		<input id="password" name="password" type="password" onChange={handlepasswordchange} value={password} className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-violet-600 focus:ring-violet-600" />
		<button type="submit" onClick={handleSubmit}  className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-violet-600 text-gray-50">Login</button>
		
		
		<div className="flex justify-center mt-6 space-x-2 text-xs">
			{/* <a rel="noopener noreferrer" href="#" className="text-gray-600">Forgot Password?</a> */}
			<span className="text-gray-600">Don't have an account?</span>
			{/* <a rel="noopener noreferrer" href="#" className="text-gray-600">Sign Up</a> */}
			<Link className="m-2 px-4 hover:underline bg-white hover:bg-red-500 hover:text-white border-4 " to="/signup"> Sign Up </Link>
		</div>
	</div>
    </div>
}

export default Login;