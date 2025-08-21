import { useEffect, useRef, useState } from "react"

export const usePrev = (value) => {
    const ref=useRef()
    console.log("re-rendered happend with new value "+value);
    

    useEffect(() => {
        console.log("Updated the ref to be "+value);
        
        ref.current=value
    },[value])

    console.log("Returned "+ref.current);
    
    return ref.current;
}