import Link from "next/link";


interface NavbarProps {
    label:string,
    icon:React.ReactNode,
}

const  NavbarBox:React.FC<NavbarProps> = ({label,icon})=>{
    return (
        <Link className="px-4 py-2 mt-2 w-full flex flex-row items-center gap-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700 " href="#">
            <div>
            {icon}
            </div>
            {label}
        </Link>
    )
}

export default NavbarBox;