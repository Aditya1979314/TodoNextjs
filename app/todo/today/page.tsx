"use client"
import { Addtasksvg } from "@/components/Svgicons"
import { useState } from "react";

interface todo{
title:string,
description:string
};

interface Addtaskprops{
    data:todo[]
}

const arr:todo[] = [
    {
        title:"first task",
        description:"task data description"
    },
    {
        title:"second task",
        description:"second task description"
    }
];

const Addtask:React.FC = ()=>{
const [isactive,setisactive] = useState(false);

function onclickhandler(){
    setisactive((prev)=>!prev);
}

    return(
        <div className="h-full w-full flex flex-col items-center mt-4">
            {
                (arr.length > 0) && (
                    arr.map((obj)=>{
                        return <div className="px-4 py-2 mb-2  h-1/12 w-3/5 border-2 border-black-400">
                            <div></div>
                            <div>{obj.title}</div>
                            <div>{obj.description}</div>
                            </div>
                    })
                )
            }
            <div onClick={onclickhandler} className="flex flex-row border w-3/5 mb-2 gap-1">
                <Addtasksvg/>
                <button className="hover:text-[#DC4C3E]">Add task</button>
            </div>
            {
                    isactive && (
                        <div className="flex flex-col gap-1 p-4 shadow-lg h-1/5 w-3/5 relative border-2 border-black-400">
                        <input placeholder="Enter title" className=" focus:outline-none focus:ring focus:ring-blue-500"></input>
                        <input placeholder="Enter Description" className="focus:outline-none focus:ring focus:ring-blue-500"></input>
                        <div className="absolute right-1 bottom-1">
                        <button onClick={onclickhandler} className="hover:bg-gray-400 bg-gray-100 px-2 py-1 rounded-md mr-1">Cancel</button>
                        <button className="bg-[#DC4C3E] px-2 py-1 rounded-md">Add task</button>
                        </div>
                       </div>
                    )
                }
       </div>
    )
}

export default Addtask;