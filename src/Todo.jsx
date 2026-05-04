import Form from "./components/Form";
import Nav from "./components/Nav";
import TodoList from "./TodoList";

export default function AllTodo(){
    return(
      <div>
      <Nav showForm={showForm} setShowForm={setShowForm}/>
      <Form 
      list={list}
      setList={setList}
      showForm={showForm}
      setShowForm={setShowForm}
      />
      <TodoList list={list} setList={setList}/>
      </div>
    )
}