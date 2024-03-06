import { useEffect, useState } from "react";

type CircleProps = {
    calculateSum: Function;
}

export const Circle = (props: CircleProps) => {
    
    const [counter, setCounter] = useState(0); 
    const [color, setColor] = useState('red'); 
    const [obj, setObj] = useState({name: 'Carlo', surname: 'Leonardi'});
    const [arr, setArr] = useState<string[]>([]);
    const addItem = (name: string) => {
        arr.push(name);
        console.log(arr);
        setArr([...arr]);
    }
    const changeName = (name: string) => {
        obj.name = name;
        setObj({...obj});
    }

    useEffect(()=> console.log("sto venendo invocata"),[]);

    
    //props.calculateSum((oldSum: number) => oldSum + counter)
    // ;
    return <div>
        
        <p style={{color: color}}>{obj.name}</p>
        <button onClick={() => color === 'red' ? setColor('yellow'): setColor('red')}>Cambia colore</button>
        <button onClick={() => obj.name === 'Carlo' ? changeName('Mario'): changeName('Carlo')}>Cambia nome</button>
        
        <button onClick={() => {addItem("Carlo")}}>Aggiungi Carlo</button>
        <ul>
            {arr.map(item => <li>{item}</li>)}
        </ul>
        {/* <button onClick={() => {
            // setCounter(counter + 2) 
            setCounter((value) => value + 2)
            props.calculateSum((oldSum: number) => oldSum + 2)
        }}>Premi counter</button> */}
    </div>
}