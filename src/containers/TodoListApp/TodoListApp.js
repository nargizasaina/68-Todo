import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {add, fetchTodo, saveTodo} from "../../store/actions";
import TodoList from "../../components/TodoList/TodoList";
import ShowList from "../../components/ShowList/ShowList";

const TodoListApp = () => {
    const dispatch = useDispatch();
    const todo = useSelector(state => state.todo);
    const [showForm, setShowForm] = useState(false);

    console.log(todo);
    const newTask = useSelector(state => state.newTask)
    console.log(newTask);

    useEffect(() => {
        dispatch(fetchTodo());
    }, [dispatch]);

    const onAddClick = () => {
        setShowForm(true);
    };

    const onChange = e => {
        console.log(e.target.value);
        if (e.target.value !== '') {
            return dispatch(add(e.target.value));
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setShowForm(false);

        await dispatch(saveTodo());
        dispatch(fetchTodo());
    };

    return (
        <>
            <TodoList
                onAddClick={onAddClick}
                onChange={onChange}
                onSubmit={onSubmit}
                showForm={showForm}
            />
            <div className="ShowList">
                <h3>List of my todos</h3>
                {todo.map(task => (
                    <ShowList
                        key={task.id}
                        task={task.newTask}
                    />
                ))}
            </div>
        </>

    );
};

export default TodoListApp;