import { useState, useEffect } from 'react'
export function usePostTitle(){
    const [Post,setPost]=useState({});
    
      async function getPost(){
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const json = await response.json();
        setPost(json);
      }
    
      useEffect(() => {
        getPost();
      },[])
    
      return Post.title
      
}

export function usefetch(url,reTryTime){
    const [finalData,setFinalData]=useState({});
    const [loading, setLoading] = useState(true);
    console.log(url);
    


    async function getDetils(){
        setLoading(true);
        const response=await fetch(url)
        const json=await response.json();
        setFinalData(json);
        setLoading(false);
    }
    useEffect(() => {
        getDetils()
    },[url])

    useEffect(() => {
        let clock=setInterval(getDetils,reTryTime*1000)

        return () => clearInterval(clock)
    })

    return {finalData
            ,loading
    }
}
