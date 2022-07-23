import axios from "axios";

export const ADD = 'ADD';
export const ERASE = 'ERASE';

export const FETCH_TODO_REQUEST = 'FETCH_TODO_REQUEST';
export const FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS';
export const FETCH_TODO_FAILURE = 'FETCH_TODO_FAILURE';

export const SAVE_TODO_REQUEST = 'SAVE_TODO_REQUEST';
export const SAVE_TODO_SUCCESS = 'SAVE_TODO_SUCCESS';
export const SAVE_TODO_FAILURE = 'SAVE_TODO_FAILURE';

export const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE';

export const add = task => ({type: ADD, payload: task});
export const erase = () => ({type: ERASE});

const fetchTodoRequest = () => ({type: FETCH_TODO_REQUEST});
const fetchTodoSuccess = todo => ({type: FETCH_TODO_SUCCESS, payload: todo});
const fetchTodoFailure = () => ({type: FETCH_TODO_FAILURE});

const saveTodoRequest = () => ({type: SAVE_TODO_REQUEST});
const saveTodoSuccess = task => ({type: SAVE_TODO_SUCCESS, payload: task});
const saveTodoFailure = () => ({type: SAVE_TODO_FAILURE});

const deleteTodoRequest = () => ({type: DELETE_TODO_REQUEST});
const deleteTodoSuccess = task => ({type: DELETE_TODO_SUCCESS, payload: task});
const deleteTodoFailure = () => ({type: DELETE_TODO_FAILURE});

export const fetchTodo = () => {
    return async (dispatch) => {
        try{
            dispatch(fetchTodoRequest());

            const response = await axios('https://counter-c7d82-default-rtdb.europe-west1.firebasedatabase.app/todo.json');
            const data = response.data;
            if(data) {
                const todoList = Object.keys(data).map(id => ({
                    ...data[id],
                    id,
                }));
                console.log(todoList);
                dispatch(fetchTodoSuccess(todoList));
            } else {
                dispatch(fetchTodoSuccess(''));
            }
        } catch (e) {
            dispatch(fetchTodoFailure());
        }
    };
};

export const saveTodo = () => {
    return async (dispatch, getState) => {
        try{
            const newTask = getState().newTask;

            dispatch(saveTodoRequest());
            await axios.post('https://counter-c7d82-default-rtdb.europe-west1.firebasedatabase.app/todo.json', {newTask});
        } catch (e) {
            dispatch(saveTodoFailure());
        }
    };
};

export const deleteTodo = (id) => {
    return async (dispatch) => {
        try{
            dispatch(deleteTodoRequest());

            await axios.delete(`https://counter-c7d82-default-rtdb.europe-west1.firebasedatabase.app/todo/${id}/.json`);
        } catch (e) {
            dispatch(deleteTodoFailure());
        }
    };
};

