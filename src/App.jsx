import { useState } from "react";
import Form from "./components/Form";
import Nav from "./components/Nav";
import TodoList from "./TodoList";
import AllTodo from "./Todo";
import { Route, Routes } from "react-router-dom";




export default function App(){
  const [showForm, setShowForm]=useState(false);
  const [list, setList] = useState([]);
  console.log(list)
  return (
    <div>
     
     <Routes>
       <Route path="/" element={<AllTodo/>}/>
     </Routes>
    </div>
  )
}