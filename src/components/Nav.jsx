export default function Nav({showForm, setShowForm}){
    return(
       <nav className="w-full  bg-blue-800 text-white flex justify-between p-3 ">
        <h1 className="font-bold text-2xl">Todo App</h1>
        <button className="px-1.5 py-1 bg-transparent border rounded "  onClick={(e)=>setShowForm(!showForm)}>
            {showForm? "Hide Form": "Show Form"}
        </button>
       </nav>
    )
}