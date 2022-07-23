import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {add, deleteTodo, erase, fetchTodo, saveTodo} from "../../store/actions";
import TodoList from "../../components/TodoList/TodoList";
import ShowList from "../../components/ShowList/ShowList";

const TodoListApp = () => {
    const dispatch = useDispatch();
    const todo = useSelector(state => state.todo);
    const newTask = useSelector(state => state.newTask);

    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        dispatch(fetchTodo());
    }, [dispatch]);

    const onAddClick = () => {
        setShowForm(true);
    };

    const onChange = e => dispatch(add(e.target.value));

    const onDelete = async (id) => {
        await dispatch(deleteTodo(id));
        dispatch(fetchTodo());
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (newTask !== '') {
            setShowForm(false);

            await dispatch(saveTodo());
            dispatch(fetchTodo());
            dispatch(erase());
        } else {
            alert('Enter a task name');
        }
    };

    let list = <p>There are no tasks!</p>;

    if (todo.length > 0) {
        list = todo.map(task => (
            <ShowList
                key={task.id}
                task={task.newTask}
                onDelete={() => onDelete(task.id)}
            />
        ))}

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
                {list}
            </div>
        </>
    );
};

export default TodoListApp;