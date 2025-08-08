import PostComponent from '/src/Post.jsx';
import { useEffect, useState } from 'react';

function App() {
  const [count,setCount]=useState(0)

  // function increaseCount(){
  //   setCount(Math.random() > 0.5 ? count+(Math.floor(Math.random()*10)) : count+5)
  // }

  useEffect(function(){
    setInterval(() => {
      setCount(count+1)
    }, 5000);
  },[count])
  return <div>
    <div style={{
      display:"flex",
      marginLeft:25,
      marginTop:30
      }}>

      <div style={{
      background:"lightblue",
      borderRadius:50,
     width:20,
     height:20,
     textAlign:'center',
     position:'absolute'
    }}>
      {count}
    </div>
    </div>
    <img style={{
      cursor:"pointer"
    }} src={"https://th.bing.com/th/id/OIP.0HsnCoTXD1PKhF58dU0lYgHaHa?w=191&h=191&c=7&r=0&o=5&dpr=2&pid=1.7"} width={50}/>

  </div>
   
}












function ProfileCard(){
  return <div style={{
    widows:200,
    height:200,
    backgroundColor:"white",
    borderRadius:10,
    padding:30,
  }} >
    {/* <div style={{
      width:100,
      height:50,
      }}>
      <img style={{
        width:250,
        height:50,
        borderRadius:10,
        display:"block",
        marginLeft:"auto",
        marginRight:"auto",
        zIndex:10,
      }} src="https://appxcontent.kaxa.in/subject/2024-07-07-0.9522250790418232.png"/>
    </div> */}
    <div>
    <img style={{
      width:50,
      height:50,
      borderRadius:100,
      display:"block",
      marginLeft:"auto",
      marginRight:"auto",
      zIndex:11,
    }} src={"https://tse2.mm.bing.net/th/id/OIP.LP_bVPpxmhrrk4kv9kAALwHaHa?rs=1&pid=ImgDetMain"} />
  </div>

  <div style={{
    textAlign:"center",
  }}>
    <h2>Daksh Hiran</h2>
    <h3 style={{
      color:"grey",
      fontWeight:550
    }}>Working with Full stack</h3>
  </div>

  <div style={{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
  }}>
    <div style={{
      color:"grey",
    }}>
      <h4>Profile Viewers</h4>
      <h4>Post Impressions</h4>
    </div>

    <div style={{
      color:"blue",
      fontSize:13,
    }}>
      <h4>1,000</h4>
      <h4>1,000</h4>
    </div>
  </div>
  </div>
}

const style={width : 200,backgroundColor:"white",borderColor:"grey", borderRadius:10,borderWidth:1,padding:30}
function PostCompnent({title,subtitle, time, content}) {
    return <div style={style}>
    <div style={{display:"flex"}}>
      <img src={"https://tse2.mm.bing.net/th/id/OIP.LP_bVPpxmhrrk4kv9kAALwHaHa?rs=1&pid=ImgDetMain"} style={{
        width:30,
        height:30,
        borderRadius:200
      }}/>
      <div style={{
        fontSize:10,
        marginLeft:10,
      }}>
        <b>
          {title}
        </b>
         <div>{subtitle}</div>

      {/* conditonal rendering
      conditonally render time if it exists */}
      {time != undefined ? <div style={{display:"flex",gap:3}}>
        <div>{time}</div>
      <div>
        <img src="https://images.eq3.com/product-definitions/cjuedn73z05650162zt3g6fu8/instance/cjv6ukkqm02p30118culhn925/THUMBNAIL/4ad0d9c2-7dc6-40cc-9a61-df08bcce4e0e.jpg" style={{width:10, height:10}} />
      </div>
    </div> : null}

      </div>
     
     </div>
      <div style={{
        fontSize:12,
      }}>
        {content}
      </div>
    </div>
}

function ToggleMessage(){
  let [notificationCount,setNotificationCount]=useState(0)

  function increment(){
   setNotificationCount(notificationCount+1)
    
  }
  return <div>
    <button onClick={increment}>
      Increase Count
    </button>
    {notificationCount}
  </div>
}

export default App
