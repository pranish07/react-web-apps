import React, {useState} from "react";
import"../../styles.css";
 function DiceGame(){
    const[dice1,setDice1]=useState(1);
    const[dice2,setDice2]=useState(1);

    function handleClick(){
        setDice1(Math.floor(Math.random()*6)+1);
    }
    function handleClick2(){
        setDice2(Math.floor(Math.random()*6)+1);
    }
    function win(){
        if(dice1===dice2){
            return "You Win!";
        }
        else{
            return "You Lose!";
        }
    }

     return(
         <>
         <center>
            <h1>Dice Game</h1>
            <img  style={{position:"relative", right:"10px"}}src={require(`./images/dice${dice1}.png`)} />
            <img src={require(`./images/dice${dice2}.png`)} />
            <br/>
            <button style={{position:"relative", right:"70px"}}onClick={()=>handleClick()} className="uw-button">Roll Dice</button>
            <button style={{position:"relative", left:"60px"}} onClick={()=>handleClick2()} className="uw-button">Roll Dice</button>
            </center>
         </>
     );
 }
 export default DiceGame;