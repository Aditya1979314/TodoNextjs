import Link from "next/link";




const Login:React.FC = ()=>{
    return (
        <div className="h-screen flex flex-col justify-center items-center">
        <div className="p-16 flex flex-col gap-6 shadow-lg ">
            <h1 className="text-black text-xl font-bold font-mono">Create your account</h1>
        <input className="p-2 ring-red-500" placeholder="Enter the email"/>
        <input className="p-2 ring-red-500" placeholder="Enter the password"/>
        <button className="bg-sky-400 hover:bg-sky-500 px-4 py-2 text-white rounded-md">SignUp</button>
        <div className="flex gap-1">
            <div>Don't have an account ?</div>
            <Link href='/signup' className="text-sky-400">Signup</Link>
        </div>
        </div>
    </div>
    )
}

export default Login;