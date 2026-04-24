import { useState } from "react"

export default function Form({setList,showForm}){
    const [value, setValue]= useState("");
    function handleClick(){
        setList(value);
    }
    if(showForm){
    return (

        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-7/12 p-3 border flex flex-col  gap-2">

            <h1 className="font-serif text-center text-2xl ">Create Todo</h1>

            <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} className="border focus:outline-0" placeholder="What are you thinking about?"/>
            <button onClick={handleClick} className="py-1 px-1.5 bg-blue-800 rounded text-white">Save</button>
            </div>
        </div>
    )
}
}