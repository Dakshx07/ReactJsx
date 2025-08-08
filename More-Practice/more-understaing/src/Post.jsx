
const style={width : 200,backgroundColor:"white",borderColor:"grey", borderRadius:10,borderWidth:1,padding:30}

function PostComponent({title,subtitle, time,image, content}) {
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
       {image ? <img src={image} style={{width:10,height:10}} /> : null}
      </div>
    </div> : null}

      </div>
     
     </div>
      <div style={{
        fontSize:11,
      }}>
        {content}
      </div>
    </div>
}

export default PostComponent