import React from 'react';
import './Todo.css';
import {List,Avatar,ListItemAvatar,ListItem,ListItemText} from '@material-ui/core';

function Todo(props) {
    return (
       <List>
         <ListItem>
         <ListItemAvatar>
         </ListItemAvatar>
           <ListItemText primary={props.text} secondary="Demo Text 😁"/>
         
         </ListItem>
       
       
       </List>
    )
}

export default Todo;
