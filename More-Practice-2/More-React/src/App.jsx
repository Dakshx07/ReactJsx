

function App() {
const todos=[{
  title:"Learn React",
  done:false,
  key:1
},{
  title:"Learn Redux",
  done:true,
  key:2
}]

const TodoComponents=todos.map(todo => 
  <Todo key={todo.key} title={todo.title} done={todo.done}/>
)

  return <div>
    {TodoComponents}
  </div>
}

function Todo({title,done}){
  return <div>
    {title} - {done ? "Done!" : "Not Done"}
   </div>
}

function Card({children}){
  return <div style={{
    border:"1px solid #ccc",
    borderRadius:'7px',
    padding:"20px",
    margin:'10px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
  }}>
    {children}
  </div>
}



export default App
