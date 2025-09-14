import React from "react";
import {Link} from "react-router-dom";

function Nav(props){
    return <div className="p-4">
        <nav className=" p-4 flex md:justify-start justify-center items-center bg-blue-300 md:flex-row flex-col  ">
        <Link className="m-2 px-4 hover:underline bg-white hover:bg-blue-500 hover:text-white border-4 " to="/"> Stream </Link>
        <Link className="m-2 px-4 hover:underline bg-white hover:bg-blue-500 hover:text-white border-4 " to="/events"> Find Events </Link>
        <Link className="m-2 px-4 hover:underline bg-white hover:bg-blue-500 hover:text-white border-4 " to="/communities"> Find Communities </Link>
        <Link className="m-2 px-4 hover:underline bg-white hover:bg-blue-500 hover:text-white border-4 " to="/veterans"> Find Veterans </Link>
        <Link className="m-2 px-4 hover:underline bg-white hover:bg-blue-500 hover:text-white border-4 " to="/profile"> My profile </Link>
        {/* <Link className="m-2 px-4 hover:underline bg-white hover:bg-blue-500 hover:text-white border-4 " to="/" onClick={props.ftn}> Logout </Link> */}
        <Link className="m-2 px-4 hover:underline bg-white hover:bg-blue-500 hover:text-white border-4 " to="/createpost"> Create Post </Link>
        </nav>

    </div>
}

export default Nav;