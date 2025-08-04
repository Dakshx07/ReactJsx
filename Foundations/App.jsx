import React from 'react';
import { useState } from 'react'

function App() {
const [count,setCount]=useState(0)

function onClickHanlder(){
  setCount(count+1)
}
  return (
    <>
      <button id="btn" onClick={onClickHanlder}>Counter {count}</button>
     </>
  )
}

function Button(props){
  return <button onClick={props.onClickHanlder}>Counter {count}</button>
}

export default App
