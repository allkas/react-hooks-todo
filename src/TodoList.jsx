import React from 'react';
import {Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText, } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import List from "@material-ui/core/List";

const TodoList = ({ todos, deleteTodo }) => (
    <List>
        {todos.map((todo, index) => (
            <ListItem key={index.toString()} dense button>
                <Checkbox tabIndex={-1} disableRipple/>
                <ListItemText primary={todo}/>
                <ListItemSecondaryAction>
                    <IconButton
                        aria-label="Delete"
                        onClick={() => {
                            deleteTodo(index);
                        }}
                    >
                        <DeleteIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        ))}
    </List>
);


export default TodoList;