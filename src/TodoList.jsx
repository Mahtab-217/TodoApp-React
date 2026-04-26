import TodoCard from "./TodoCard";

export default function TodoList({list, setList}){
    return (
        <div>
            {list.map(x=>(
               <TodoCard todo={x} setList={setList}/>
            ))}
            <div className=" w-full border ">

            </div>

        </div>
    )
}