import React, { useContext, useState } from 'react'

const BlubContext=React.createContext()

function BlubProvider({children}) {
  const [bulbOn, setBulbOn] = useState(true)
  return <div>
   <BlubContext.Provider value={{
    bulbOn : bulbOn,
    setBulbOn : setBulbOn,
    }}>
    {children}
    </BlubContext.Provider>
  </div>
}
function App() { 
  return <div>
   <BlubProvider>
    <Light />
   </BlubProvider>
  </div>
}

function Light() {


  return <div>
    <LightBlub  />
    <LightSwitch  />
  </div>
}

function LightBlub() {
const { bulbOn } =useContext(BlubContext)
  return <div>
    {bulbOn ? "Blub On" : "Blub Off"}
  </div>
}

function LightSwitch() {
const { bulbOn,setBulbOn } =useContext(BlubContext)

  function toggle() {
    setBulbOn(!bulbOn)
  }
  return <div>
    <button onClick={toggle}>Toggle the blub</button> 
  </div>
}
export default App
