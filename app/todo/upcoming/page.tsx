"use client"
import { ChangeEvent } from "react";


interface todo{
    title:string,
    description:string,
}

const arr:todo[] = [
    {
        title:"task 1",
        description:"details of task"
    },
    {
        title:"task 1",
        description:"details of task"
    }
]

const Upcoming:React.FC = ()=>{


function handlechange(e:ChangeEvent<HTMLInputElement>){
 
}
return (
    <div className="h-full flex flex-col items-center">
        <div className="mt-2 mb-2 p-2 border ">
            <input type="Date" onChange={handlechange}/>
        </div>
        {
            (arr.length > 0) &&( arr.map((obj)=>{
                return <div className="px-4 py-2 mb-2  h-1/12 w-3/5 border-2 border-black-400">
                    <div></div>
                    <div>{obj.title}</div>
                    <div className="text-gray-600">{obj.description}</div>
                    </div>
            })
            )
        }
    </div>
)
}

export default Upcoming;