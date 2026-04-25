import TodoCard from "./TodoCard";

export default function TodoList({list}){
    return (
        <div>
            {list.map(x=>(
               <TodoCard todo={x}/>
            ))}
            <div className=" w-full border ">

            </div>

        </div>
    )
}