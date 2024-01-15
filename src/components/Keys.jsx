import React from "react";
import { useState } from "react";
import Display from "./Display";

const calculatorKeys = () => {
    const [name, setName] = useState("");

    function handleClick (e) {
        setName( prevName => prevName + e.target.value);
    }

    function handleALLclear () {
        setName("");
    }

    function handledelete () {
        setName( prevName => prevName.slice(0, -1));
    }

    function handleevaluate () {
        setName( eval(name).toString());
    }

    return (
        <>
          <div><Display name={name} /></div>
          <div className="keypad">
          <div className="a">
            <button onClick={handleALLclear}>AC</button>
            <button onClick={handledelete}>DEL</button>
            <button onClick={handleevaluate}>=</button>
          </div>
          <div className="b">
            <button onClick={handleClick} value="7">7</button>
            <button onClick={handleClick} value="8">8</button>
            <button onClick={handleClick} value="9">9</button>
            <button onClick={handleClick} value="/">/</button>
          </div>
          <div className="c">
            <button onClick={handleClick} value="4">4</button>
            <button onClick={handleClick} value="5">5</button>
            <button onClick={handleClick} value="6">6</button>
            <button onClick={handleClick} value="*">*</button>
          </div>
          <div className="d">
            <button onClick={handleClick} value="1">1</button>
            <button onClick={handleClick} value="2">2</button>
            <button onClick={handleClick} value="3">3</button>
            <button onClick={handleClick} value="-">-</button>
          </div>
          <div className="e">
            <button onClick={handleClick} value="0">0</button>
            <button onClick={handleClick} value=".">.</button>
            <button onClick={handleClick} value="+">+</button>
            <button onClick={handleClick} value="%">%</button>
          </div>    
          </div>

        </>

    )
}

export default calculatorKeys
