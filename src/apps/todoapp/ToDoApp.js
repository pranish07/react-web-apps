import React, { useState } from "react";

function ToDoApp() {
    const[userInput, setUserInput]=useState("");
  const [todos, setTodos] = useState([]);

  const list=()=>{
      setTodos([...todos,userInput]);
  }

  return (
    <>
      <h1>ToDo app</h1>
      <input onChange={(event)=>setUserInput(event.target.value)} type="text" />
      <button onClick={()=>list()}>Add</button>

      <ul>
        {
        todos.map((todo,index) =>
          <li key={index}>{todo}</li>
        )
        }
      </ul>
    </>
  );
}

export default ToDoApp;
