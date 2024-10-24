/* eslint-disable no-unused-vars */
import React from "react";
import line1 from '../assets/Group 1000002869.png';


const Header = () =>{

    return(
        <header className="flex justify-between items-center p-4 pt-6 px-16">
            <div className="text-2xl font-bold flex justify-center items-center space-x-3 w-44 h-7">
                <p className="font-medium text-3xl">VOLO</p> 
                <img src={line1} alt="" />
            </div>
            <nav className="pr-10">
                <ul className="flex space-x-12 font-medium text-xl">
                    <li><a href="#" className=" hover:text-black border-r-2 border-black pr-12">Search</a></li>
                    <li><a href="#" className=" hover:text-black">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;