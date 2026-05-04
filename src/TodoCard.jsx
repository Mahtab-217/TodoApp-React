import { CheckCircle, Trash2 } from "lucide-react";

export default function TodoCard({list,todo, setList}){
    function handleDelete(id){
        setList( (p)=> p.filter((y)=> y.id !==id));
    }
   function handleClick(id)
   {
    setList((prev)=>prev.map((x)=> x.id==id ? {...x, completed : !x.completed} : x))   
}
    return(
        <div className="relative ">
        <div  className="w-10/12 border items-center justify-center  bg-linear-60 from-blue-500 to-red-400  via-blue-400 via-red-900 bg-clip-text max-w-6px  mt-16 text-center mx-auto  flex flex-col gap-2   ">
            <h1  style={{
                fontSize: "48px",
                fontWeight:"700",
                backgroundImage: "linear-gradient(60deg, blue, pink purple)",
                color:"transparent",
                backgroundClip:"text"
            }} className={ todo.completed ? 'text-decore': '' }>{todo.todo}</h1>
            <div className="w-full mt-3 px-4 flex justify-between items-center">
            <h1 className="font-serif text-xl ">{todo.date}</h1>
            <div className="flex gap-2">
            <button onClick={()=>handleDelete(todo.id)}>
                <Trash2 size={28}/>
            </button>
            <button onClick={()=> handleClick(todo.id)}>
                <CheckCircle size={28}/>
            </button>
        </div>
        </div>
        </div>


        <div className="w-full py-4 items-center text-xl font-bold px-6 flex justify-between fixed bottom-0 left-0 bg-blue-800 text-white ">
            <h1>Total</h1>
            <p>{list.length}</p>
        </div>
        </div>

    )
}