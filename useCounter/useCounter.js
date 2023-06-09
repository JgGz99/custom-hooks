import { useState } from "react"

export const useCounter = (initial = 0) => {
    const [counter, setCounter] = useState(initial)

    const increment =(value=1)=>{
        setCounter(counter+value)
    }
    const decrement =(value=1)=>{
        
        setCounter(counter-value)
    }
    const reset =()=>{
        setCounter(initial)
    }
    return {
        counter,
        increment,
        decrement,
        reset
    }
}