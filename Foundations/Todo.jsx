import React from 'react';
import { useState } from 'react'

function App() {

const [todo,setTodo]=useState([{
  title:"Go to hym",
  descrp:"hit the gym daily",
  done:false
}])

function addTodo(){
  let newArray=[]
  for(let i=0;i<todo.length;i++){
    newArray.push(todo[i])
  }
  
  newArray.push({
    title:document.getElementById("title").value,
  descrp:document.getElementById("descrp").value,
  done:true
  })
  setTodo(newArray)
}
  return (
    <>
      <input id="title" type="text" placeholder="Title"></input>
      <input id="descrp" type="text" placeholder="descrp"></input>
      <br />
     <button onClick={addTodo}>Add Todo</button>
      <br />
     {todo.map((todo) => (
        <Todos 
        title={todo.title} 
        descrp={todo.descrp} 
        done={todo.done}
        />
     ))}
     </>
  )
}

function Todos(props){
  return (
    <div>
    <h1>{props.title}</h1>
    <h2>{props.descrp}</h2>
    <h1>{props.done ? "TASK DONE" : "task not done"}</h1>
    </div>
    )
}



export default App