import React, { use, useEffect } from 'react';
import { useState } from 'react'


function App() {
  const [count, setCount] =useState(0)
  const [count2, setCount2] =useState(0)

  function increase(){
    setCount(count => count+1)
  }
  function decrease(){
    setCount2(count => count-1)
  }
  return (
    <>
      <div>
       <Counter count={count} count2={count2}/>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
       </div>
    </>
  )
}


// mouting , re-redering, unmounting
function Counter(props){

 
    useEffect(function (){
      console.log("Mounted");
      return function(){
        console.log("Unmounted");
      }
    },[])

    useEffect(function (){
      console.log("count has changed");
      return function(){
        console.log("cleanup inside count effect");
        
      }
    },[props.count,props.count2])

  return <div>
    Counter {props.count} <br />
    Counter2 {props.count2} 
  </div>
}

export default App
