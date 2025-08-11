
import { useRef } from 'react'
import { BrowserRouter, Routes, Route, Link,useNavigate,Outlet } from 'react-router-dom'
function App() {
  const inputRef=useRef()
  function focusOnInput(){
    // document.getElementById('name').focus() 
    inputRef.current.focus()
  }
  return <div>
    <h1>Sign UP</h1>
    <input ref={inputRef}  type="text"  /> 
    <input type="text"  />
    <button onClick={focusOnInput}>Submitt</button>
  </div>
}











function Layout(){
  return <div style={{height:'100vh',backgroundColor:'#134E5E'}}>
    <Header />  
    <div style={{height:"90vh",backgroundColor:'#0B3037'}}>
      <Outlet />
      </div>
    footer
  </div>
}

function Header(){
  return <div>
     <Link style={{textDecoration:"none",color:"slateblue"}} to="/">ALLEN</Link> 
         <Link style={{textDecoration:"none",color:"slateblue"}}to="/neet/online-coaching-class-11">CLASS11</Link> 
         <Link  style={{textDecoration:"none",color:"slateblue"}}to="/neet/online-coaching-class-12">CLASS12</Link>

  </div>
}
function ErrorPage(){
  return <div>
    Sorry page Not found
  </div>
}
function Landing(){
  return <div style={{backgroundColor:'green',padding:10,margin:10,borderRadius:20}}>
    Welcome To Allen
  </div>
}
function Class11Program(){
  return <div style={{backgroundColor:'red',padding:10,margin:10,borderRadius:20}}>
    Class 11 Program
    </div>
}
function Class12Program(){
  let navigate=useNavigate()

  function redirectUser(){
    navigate('/')
  }
  return <div style={{backgroundColor:'blue',padding:10,margin:10,borderRadius:20}}>
    Class 12 Program
    <button onClick={redirectUser}>Go back to the landing page</button>
    </div>
}

export default App
