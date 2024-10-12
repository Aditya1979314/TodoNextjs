import Link from "next/link";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Todo List</h1>
        
        <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-700">What is a Todo?</h2>
            <p className="text-gray-600">
                A Todo is a task or item that needs to be completed. This application helps you manage and track your todos efficiently.
            </p>
        </div>

        <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-700">How to Use:</h2>
            <ul className="list-disc list-inside text-gray-600">
                <li>Add new todos to your list.</li>
                <li>Mark todos as complete.</li>
                <li>Delete todos that are no longer needed.</li>
            </ul>
        </div>

        <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Features:</h2>
            <ul className="list-disc list-inside text-gray-600">
                <li>Simple and user-friendly interface.</li>
                <li>Responsive design for mobile and desktop.</li>
                <li>Dark mode support.</li>
            </ul>
        </div>

        <div className="text-center mt-8">
            <Link href='/signup' className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
               Signup
            </Link>
            <Link href='/login' className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 m-1">
               Login
            </Link>
        </div>
    </div>
</div>
  );
}
