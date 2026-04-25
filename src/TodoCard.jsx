export default function TodoCard({todo}){
    return(
        <div  className="w-full max-w-6px  mt-14 text-center mx-auto  flex flex-col gap-2   ">
            <h1 className="font-bold text-xl font-serif">{todo.todo}</h1>
            <h1 className="font-bold">{todo.date}</h1>
        </div>

    )
}