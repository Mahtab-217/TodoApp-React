import { useState } from "react";
import Form from "./components/Form";
import Nav from "./components/Nav";
import TodoList from "./TodoList";
import AllTodo from "./Todo";

export default function App(){
  const [showForm, setShowForm]=useState(false);
  const [list, setList] = useState([]);
  console.log(list)
  return (
    <div>
      <div>
              <Nav showForm={showForm} setShowForm={setShowForm}/>
      <Form list={list} showForm={showForm} setList={setList} setShowForm={setShowForm}/>
      <TodoList list={list} setList={setList}/>
        </div>
    </div>
  )
}