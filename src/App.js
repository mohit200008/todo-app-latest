import React, { useState } from 'react';
import { Button,FormControl,Input,InputLabel } from '@material-ui/core';
import './App.css';

function App() {
  const [todos,setTodos]=useState(['Take dogs for a walk','Take the rubbish out','mohit and saransh are best friends']);
  const [input,setInput]=useState('');
  console.log('😜',input);

  const addTodo = (event) => {
    event.preventDefault();
    console.log('*',"This is working!!");
    setTodos([...todos,input]);
    
    setInput('');
    console.log(todos);
  }



  return (
    <div className="App">
     <h1>Hello noob coders 💋</h1>
     
     <FormControl>
       <InputLabel>✔ Write your day</InputLabel>
       <Input value={input} onChange={event=>setInput(event.target.value)}/>
      
     
     
     </FormControl>
     <Button disabled={!input} variant="contained" color="secondary" onClick={addTodo}>Add to my list</Button>
     

     <ol>
     {todos.map(todo=>(
       <li>{todo}</li>
     ))}
     </ol>
    </div>
  );
}

export default App;
