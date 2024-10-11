"use client"

import { useRouter } from "next/navigation";

interface modalpropos{
    children:React.ReactNode
}


const Modal:React.FC<modalpropos> = ({children})=>{
  const router = useRouter();

function onclickhandler(e:React.MouseEvent<HTMLDivElement>){
if(e.target === e.currentTarget){
    router.push('/todo')
}
}

    return (
        <div onClick={onclickhandler} className="fixed inset-0 shadow flex justify-center items-center bg-opacity-50">
            <div  className="flex flex-col gap-1 p-4 shadow-lg h-1/5 w-3/5 relative border-2 border-black-400 bg-white">
            {children}
            </div>
        </div>
    )
}

export default Modal;