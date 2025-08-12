import React, { useRef, useState } from 'react'
// a clock with a start and stop button
function App() {
  const [count, setCount] = useState(0)
  // const [value,setValue]=useState(0)
  const time=useRef(0)
  function startClock() {
    let timer=setInterval(function(){
      setCount(count => count+1)
      
    },1000)
     time.current=timer
  }

  function stopClock(){
    console.log(time.current);
    
    clearInterval(time.current)
  }
  
  return <div>
    {count}
    <br />
    <button onClick={startClock}>Start</button>
    <button onClick={stopClock}>Stop</button>
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
