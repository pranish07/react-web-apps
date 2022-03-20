import React, { useState } from "react";
import ItemQuotes from "./ItemQuotes";

function MotivationalQuotes() {
  const [quotes, setQuotes] = useState([]);

  const fetchData = () => {

    return fetch("http://jsonguide.technologychannel.org/quotes.json")
    .then(response => response.json())
    .then((data)=>{
        setQuotes(data);
    })
  };
  return (
    <>
      <h1> Motivational quotes</h1>
      <br />
      <button onClick={()=>fetchData()}>Fetch</button>
      {quotes.map((quote) => (
        <ItemQuotes text={quote.text} author={quote.from} /> 
      ))}
    </>
  );
}

export default MotivationalQuotes;
