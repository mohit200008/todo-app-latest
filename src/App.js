import React, { useState,useEffect } from 'react';
import { Button,FormControl,Input,InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos,setTodos]=useState(['abc','def']);
  const [input,setInput]=useState('');
  //console.log('😜',input);

  useEffect(()=>{
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setTodos(snapshot.docs.map(doc=>doc.data().todo))
    })
  },[]);

  const addTodo = (event) => {
    event.preventDefault();
    //console.log('*',"This is working!!");
    setTodos([...todos,input]);
    
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
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
      <Todo text={todo}/>
      // <li>{todo}</li>
     ))}
     </ol>
    </div>
  );
}

export default App;
