import React, { use, useEffect, useState } from 'react'
import { usefetch } from './hooks/useFetch'

//custom hook


function App() {
  const [currentPost,setCurrentPost]=useState(1);
  const {finalData,loading}=usefetch(`https://jsonplaceholder.typicode.com/todos/${currentPost}`,10);

  if(loading){
    return <div>Loading...</div>
  }
  return <div>
    <button onClick={() => setCurrentPost(1)}>1</button>
    <button onClick={() => setCurrentPost(2)}>2</button>
    <button onClick={() => setCurrentPost(3)}>3</button>
    {JSON.stringify(finalData)}
  </div>
}



export default App
