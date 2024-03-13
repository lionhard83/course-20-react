import { useReducer, useState } from "react";


type Action = {
    type: 'increment' | 'decrement' | 'reset' 
} | {
    type: 'set', 
    value: number
}

const reducer = (state: number, action: Action) => {
    switch(action.type) {
        case 'increment': return Math.min(10, state + 1);
        case 'decrement': return Math.max(0, state -1);
        case 'set': return action.value < 10 && action.value >= 0 ? action.value : state;
        case 'reset': return 0;
    }
}

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [c, setC] = useReducer(reducer, 0);
    
    
    return <>
        <button onClick={() => setC({type: 'reset'})}>Reset</button>
        <button onClick={() => setC({type: 'set', value: 5})}>Set</button>
        <button onClick={() => setC({type: 'decrement'})}>Decrementa</button>
        <button onClick={() => setC({type: 'increment'})}>Incrementa</button>
        <span>{c}</span>
    </>
}