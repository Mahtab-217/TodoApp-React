import { useState } from "react"

export default function Form({ list,setList,showForm, setShowForm}){
    const [value, setValue]= useState("");
    function handleClick(){
        if(value.trim().length > 0){
        const todo={
             id: Date.now(),
             todo: value,
             completed: false,
             date: new Date().toLocaleTimeString(),

        }
        setList((prev)=>[...prev, todo]);
        setValue("");
        setShowForm(false);
         } }
    if(showForm){
    return (

        <div className="w-full h-screen flex justify-center items-center bg-stone-200 ">
            <div className="w-7/12 p-3 border flex flex-col shadow-[20px_30px_0.9]  gap-2">

            <h1 className="font-serif text-center text-2xl ">Create Todo</h1>

            <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} className="border focus:outline-0" placeholder="What are you thinking about?"/>
            <button onClick={handleClick} className="py-1 px-1.5 bg-blue-800 rounded font-serif text-white">Save</button>
            </div>
        </div>
    )
}
}