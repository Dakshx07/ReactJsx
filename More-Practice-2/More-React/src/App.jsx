
import React from 'react';

function App() {
  return <div>
      <ErrorBoundary>
        <Card1/>
      </ErrorBoundary>
      <br />
      <ErrorBoundary>
        <Card2/>
      </ErrorBoundary>
  </div>
}

function Card1(){

  throw new Error("Hello")
  return <div style={{background:"red",borderRadius:20,padding:20,margin:20}}>
    hi there
  </div>
}

function Card2(){
  throw new Error("Hello")
  return <div style={{background:"red",borderRadius:20,padding:20,margin:20}}>
    Hello
  </div>
}



class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <div style={{background:"red",borderRadius:20,padding:20,margin:20}}>
    Something went wrong!  
  </div>
        }

        return this.props.children; 
    }
}







function Todo({title,done}){
  return <div>
    {title} - {done ? "Done!" : "Not Done"}
   </div>
}

function Card({children}){
  return <div style={{
    border:"1px solid #ccc",
    borderRadius:'7px',
    padding:"20px",
    margin:'10px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
  }}>
    {children}
  </div>
}



export default App
