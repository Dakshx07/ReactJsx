
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
 
  return (
    <>
      <div>
        <BrowserRouter>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',margin:10}}>
           <Link style={{textDecoration:"none",color:"slateblue"}} to="/">ALLEN</Link> 
         <Link style={{textDecoration:"none",color:"slateblue"}}to="/neet/online-coaching-class-11">CLASS11</Link> 
         <Link  style={{textDecoration:"none",color:"slateblue"}}to="/neet/online-coaching-class-12">CLASS12</Link>

        </div>
        <Routes>

          <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
          <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
          <Route path="/" element={<Landing />} />
        </Routes>
        </BrowserRouter>
      </div>

    </>
  )
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
  return <div style={{backgroundColor:'blue',padding:10,margin:10,borderRadius:20}}>
    Class 12 Program
    </div>
}

export default App
