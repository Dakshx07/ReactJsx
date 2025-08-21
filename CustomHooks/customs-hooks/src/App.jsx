import React, { use, useEffect, useRef, useState } from 'react'
import { usefetch } from './hooks/useFetch'
import { usePrev } from './hooks/usePrev';

//custom hook
// function useDebounce(originalFn) {
//   const currentClock=useRef()

//   const fn = () => {
//     clearTimeout(currentClock.current)
//     currentClock.current=setTimeout(originalFn,200)
//   }

//   return fn;
// }

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

function App() {
  const [input,setInput]=useState("")
  const debounceValue=useDebounce(input,200)
  function change(e){
    setInput(e.target.value)
  }

  useEffect(() => {
    console.log("expensive operation");
    
  },[debounceValue])

  
  
  return <>
    <input type="text" onChange={change}/>
  </>
}



export default App
