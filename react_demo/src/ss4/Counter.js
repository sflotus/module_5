import {useEffect, useState} from "react";
import {useIncrement} from "./useIncrement";

export function Counter() {
    const [input1, setInput1] = useState(0)
    const [input2, setInput2] = useState(0)
    const [count1, setCount1] = useIncrement(input1)
    const [count2, setCount2] = useIncrement(input2)
    return (
        <>
            <center>
                <input onChange={(event) => {
                    setInput1(parseInt(event.target.value))
                }}/>
                <button onClick={setCount1}>Click me ver 1</button>
                <span>Result: {count1}</span>
                <br/>
                <input onChange={(event) => {
                    setInput2(parseInt(event.target.value))
                }}/>
                <button onClick={setCount2}>Click me ver 2</button>
                <span>Result: {count2}</span>
            </center>
        </>
    )
}