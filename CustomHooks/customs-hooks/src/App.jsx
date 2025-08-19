import React, { useEffect, useState } from 'react'

//custom hook
function useCounter(){
  const [count,setCount]=useState(0)
  function IncreaseCount(){
    setCount(count => count+1)
  }

  return {
    count,
    IncreaseCount
  }
  // useEffect(function(){
  //   const interval=setInterval(function(){
  //     setCount(count => count+1)
  //   },1000)

  //   return () => clearInterval(interval)
  // },[])
}

function App() {
  // const [count,setCount]=useState(0)
  // useEffect(function(){
  //   const interval=setInterval(function(){
  //     setCount(count => count+1)
  //   },1000)

  //   return () => clearInterval(interval)
  // },[])

return <div>
  <Counter/>
  <Counter/>
</div>
}

function Counter(){
   const {count,IncreaseCount}=useCounter()
  return <div>
     <button onClick={IncreaseCount}>Increase {count}</button>
  </div>
}

export default App
