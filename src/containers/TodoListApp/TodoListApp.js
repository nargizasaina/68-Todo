import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {add, fetchTodo, saveTodo} from "../../store/actions";
import TodoList from "../../components/TodoList/TodoList";
import ShowList from "../../components/ShowList/ShowList";

const TodoListApp = () => {
    const dispatch = useDispatch();
    const todo = useSelector(state => state.todo);
    const [showForm, setShowForm] = useState(false);

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

    const onSubmit = (e) => {
        e.preventDefault();
        setShowForm(false);

        dispatch(saveTodo());
    };

    return (
        <>
            <TodoList
                onAddClick={onAddClick}
                onChange={onChange}
                onSubmit={onSubmit}
                showForm={showForm}
                todo={todo}
            />
            <ShowList

            />
        </>

    );
};

export default TodoListApp;