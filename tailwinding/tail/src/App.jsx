import React, { useEffect, useState } from "react";
import { SidebarToggle } from "./icons/SidebarToggle";

const useMediaQuery = (query) => {
  const [matches,setMatches]=useState(false)

  useEffect(() => {
    const media=window.matchMedia(query)
    if(media.matches !== matches){
      setMatches(media.matches)
    }

    const listener = () => setMatches(media.matches)
    media.addListener(listener)
    return () => media.removeListener(listener)
   },[matches,query])

   return matches
}

function App() {
  const [sidebar, setSidebarOpen]=useState(true)
  const isDeskTop=useMediaQuery("(min-width: 768px)");

  console.error(isDeskTop)

  useEffect(() => {
   if(isDeskTop == false){
    setSidebarOpen(false)
   }else{
    setSidebarOpen(true)
   }
  },[isDeskTop])

  return <div className="flex">
    <Sidebar sidebar={sidebar} setSidebarOpen={setSidebarOpen} />
    <MainContent sidebar={sidebar} />
  </div>
}

function Sidebar({sidebar,setSidebarOpen}){
  if(!sidebar){
      return <div className="fixed top-0 left-0">
           <div className="cursor-pointer hover:bg-slate-200" onClick={() => {
          setSidebarOpen(!sidebar)
        }}>
            <SidebarToggle />
        </div>
      </div>
  }
 
    return <div className={`transition-all duration-700 ease-in-out h-screen bg-red-200 absolute md:relative 
      ${sidebar ? "translate-x-0 w-64 opacity-100" : "-translate-x-full w-0 opacity-0"}`}
    >
      <div>
        <div className="cursor-pointer hover:bg-slate-200" onClick={() => {
          setSidebarOpen(!sidebar)
        }}>
            <SidebarToggle />
        </div>
      </div>
  </div>
  
}

function MainContent(){
  return <div className="w-full">
    <div className="bg-black h-48 hidden md:block"></div>
    <div className="grid grid-cols-10 p-4 gap-5">
   
   <div className="h-66 bg-red-500 shadow-lg rounded-2xl md:col-span-2 -translate-y-24 col-span-10 hidden md:block">

   </div> 
   <div className="h-64 bg-green-500 shadow-lg rounded-xl md:col-span-5  col-span-10">

   </div>
   <div className="h-64 bg-yellow-500 shadow-lg rounded-xl md:col-span-3 col-span-10">

   </div>
 </div>
  </div>
}

export default App;