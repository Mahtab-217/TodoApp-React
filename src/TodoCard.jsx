import { CheckCircle, Trash2 } from "lucide-react";

export default function TodoCard({todo}){
    return(
        <div  className="w-10/12 border items-center justify-center  bg-linear-60 from-blue-500 to-blue-900 via-blue-400  via-blue-800 bg-clip-text max-w-6px  mt-16 text-center mx-auto  flex flex-col gap-2   ">
            <h1 className="font-bold text-3xl font-serif text-transparent">{todo.todo}</h1>
            <div className="w-full mt-3 px-4 flex justify-between items-center">
            <h1 className="font-serif text-xl ">{todo.date}</h1>
            <div className="flex gap-2">
            <button>
                <Trash2 size={28}/>
            </button>
            <button>
                <CheckCircle size={28}/>
            </button>
        </div>
        </div>
        </div>

    )
}