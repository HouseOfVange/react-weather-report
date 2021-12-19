import React from "react";  
import { useState } from "react";
import './Temperature.css';

const Temperature = () => {

    const [temp, setTemp] = useState(65);

    const increaseTemp = () => {
        setTemp(temp + 1);
    }

    const decreaseTemp = () => {
        setTemp(temp - 1);
    }

    let tempColor = "";

    if (temp <= 49){
        tempColor = "teal";
    } else if (temp <= 59) {
        tempColor = 'green';
    } else if (temp <= 69) {
        tempColor = 'yellow';
    } else if (temp <= 79){
        tempColor = 'orange';
    } else if (temp >=80){
        tempColor = "red";
    }

    return (
        <section>
        <h1 className={tempColor}>{temp}</h1>
        <button onClick={increaseTemp} className="hotter">HOTTER</button>
        <button onClick={decreaseTemp} className="colder">COLDER</button>
        </section>
    )
}

export default Temperature