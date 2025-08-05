import React, { useEffect } from 'react';
import { useState } from 'react'
function App() {

  return (
    <>
      <div>
        <Counter />
       </div>
    </>
  )
}

function Counter(){
  const [count,setCount]=useState(0)
  console.log("Counter rendered");
  
  //useEffect is used to perform side effects in function components
  // gaurd our setinterval from rendering infinitely
  useEffect(function() {
    setInterval(() => {
      // setCount(count =>count + 1)
      setCount(function(count){
        return count + 1
      })
    },1000)
    console.log("Mounted");
    
  },[])
  
function inc(){
    setCount(count + 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>increase count</button>
    </div>
  )
}

export default App
