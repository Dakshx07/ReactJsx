import React, { use, useContext, useState } from 'react'


const CountContext=React.createContext()
const App = () => {
  return <div>
    <Parent />
  </div>
}

function CountContextProvider({children}){
  const [count,setCount]=useState(0)
  return <CountContext.Provider value={{
    count:count,
    setCount:setCount
  }}>
    {children}
  </CountContext.Provider>
}

function Parent(){
  return <CountContextProvider>
   
    <Increase />
    <Decrease />
    <Count />
    
  
  </CountContextProvider>
}

function Increase(){
  const {setCount}=useContext(CountContext)
  return <div>
    <button onClick={() => setCount(count => count+1)}>Increase</button>
  </div>
}

function Decrease(){
  const {setCount}=useContext(CountContext)
  return <div>
    <button onClick={() => setCount(count => count-1)}>Decrease</button>
  </div>
}

function Count(){
  const {count}=useContext(CountContext)
  return <div><p>Count : {count}</p></div>
}

export default App


