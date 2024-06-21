import {useEffect, useState} from "react";

function Car() {
    const [name,setName] = useState('Mercedes')
    const [color,setColor] = useState('red')
    let carList=['Mercedes','Volvo','Honda','Audi']
    let colorList=['red','green','blue','black','yellow']
    return(
        <>
            <label>Select Car:</label>
            <select value={name} onChange={event => {
                setName(event.target.value)
            }}>
                {carList.map((car, index) => (
                    <option key={index} value={car}>{car}</option>
                ))}
            </select>
            <br/>
            <label>Select Color:</label>
            <select value={color} onChange={event => {
                setColor(event.target.value)
            }}>
                {colorList.map((color, index) => (
                    <option key={index} value={color}>{color}</option>
                ))}
            </select>
            <p>Result : You select {name} with <span style={{color:color}}>{color}</span> color</p>
        </>
    )

}

export default Car;