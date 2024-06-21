import {useEffect, useState} from "react";

const Counting =()=>{
    const [count,setCount]=useState(10)
    const [flag,setFlag] = useState(true)
    useEffect(() => {
        console.log('use')
        let timerId = setInterval(()=>{
            if(count >= 0){
                // console.log(count)
                setCount(prevState =>prevState-1)
            }

        },1000)
        return () => {
            console.log('clean-up')
            clearInterval(timerId)
        }
    }, [count]);
    return(
        <>
            {count >=0 ? (<p>Count:{count}</p>) : alert('Time out')}
        </>
    )
}
export default Counting;