import TodoCard from "./TodoCard";

export default function TodoList({list, setList}){
    return (
        <div>
            {list.map(x=>(
               <TodoCard key={x.id}todo={x} setList={setList} list={list} />
            ))}
            <div className=" w-full border ">

            </div>

        </div>
    )
}