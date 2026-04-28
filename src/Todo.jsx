export default function AllTodo(){
    return(
        <div>
              <Nav showForm={showForm} setShowForm={setShowForm}/>
      <Form list={list} showForm={showForm} setList={setList} setShowForm={setShowForm}/>
      <TodoList list={list} setList={setList}/>
        </div>
    )
}