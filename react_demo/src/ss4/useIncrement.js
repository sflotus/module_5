import {useState} from "react";

export function useIncrement(addAmount) {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(prevState => prevState + addAmount)
    }

    return [count, increase];
}