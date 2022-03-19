import React, {useState} from "react";
import "../../styles.css"
function CounterApp (){
    const [number, setNumber] = useState(0);

    return(
        <div className="ca-mid">
        <h1>{number}</h1>
        <button onClick ={()=>setNumber(number+1)} className="button uw-button">Add</button>
        <button onClick ={()=>setNumber(number-1)} className="button uw-button">Less</button>
        <button onClick={()=>setNumber(0)}className="button uw-button">Reset</button>
        </div>
    );
}
export default CounterApp;