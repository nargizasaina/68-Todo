import React from 'react';
import Button from "@mui/material/Button";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import './TodoList.css';

const TodoList = (props) => {
    return (
        <div className="Todo">
            <h1>Welcome to ToDo list app!</h1>
            <p>
                <Button onClick={props.onAddClick} variant="contained" size="large">Add a task</Button>
            </p>
            <AddTaskForm
                show={props.showForm}
                onChange={props.onChange}
                onSubmit={props.onSubmit}
            />
        </div>
    );
};

export default TodoList;