"use client"
import { useState } from "react";
import NavbarBox from "./NavbarBox";
import { Profileesvg, Settingsesvg } from "./Svgicons";





const UserDropdown:React.FC = ()=>{
const[isactive,setisactive] = useState(false);

const arr = [{
    name:"Profile",
    icon:<Profileesvg/>
},
{
    name:"Settings",
    icon:<Settingsesvg/>
}
];

function toggledropdown(){
    console.log("button clicked");
    setisactive((prev)=>!prev);
}




    return (
        <div>
        <button onClick={toggledropdown} className="flex flex-row gap-1 items-center hover:bg-gray-100">
            <div>User</div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M15.646 9.647a.5.5 0 0 1 .708.707l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 1 1 .708-.707L12 13.294l3.646-3.647Z"></path></svg>
            </div>
        </button>
        {
           isactive && (
            <div className="shadow-md absolute z-10 bg-white flex flex-col items-center py-3 px-2 rounded-md">
                {
            arr.map((obj)=>{
                return <NavbarBox label={obj.name} icon={obj.icon}/>
            })
            }
            <button className="text-white bg-blue-400 px-2 py-1 hover:bg-blue-300 rounded-md mt-2 w-full">Sign Out</button>
            </div>
           )
        }
        </div>
    )
}

export default UserDropdown ;