import { useEffect, useReducer, useState } from "react"


type Action = {
    type: 'increment' | 'decrement' | 'reset' 
} | {
    type: 'set',
    value: number
};

const reducer = (state: {counter: number}, action: Action) => {
    switch (action.type) {
        case 'reset': return {counter: 0}
        case 'set': return {counter: action.value}
        case 'increment': return  {counter: state.counter + 1}
        case 'decrement': return  {counter: Math.max(0, state.counter - 1) }
        // default : {counter: state.counter}
    }
 }

export const Test = () => {
    console.log("sto rirenderizzando?")
    // const [counter, setCounter] = useState(0);
    const [state, dispatch] = useReducer(reducer, {counter: 0})
    const [obj, setObj] = useState({name: 'Carlo'});

    const changeName = () => {
        if (obj.name === 'Carlo') {
            obj.name = 'Marco'
        } else {
            obj.name = 'Carlo';
        }
        setObj({...obj});
    }


    return <>
        <button onClick={() => dispatch({type: 'reset'})} >Reset</button>
        <button disabled={state.counter <= 0} onClick={() => dispatch({type: 'decrement'})} >Decrementa</button>
        <button onClick={() => dispatch({type: 'increment'})} >Incrementa</button>
        <button onClick={() => dispatch({type: 'set', value: 10})} >Setta a 10</button>
        <p>{state.counter}</p>
        <button onClick={changeName} >Change name</button>
        <p>{obj.name}</p>
    </>
}