import {
    ADD, DELETE_TODO_FAILURE,
    DELETE_TODO_REQUEST,
    DELETE_TODO_SUCCESS,
    ERASE,
    FETCH_TODO_FAILURE,
    FETCH_TODO_REQUEST,
    FETCH_TODO_SUCCESS, SAVE_TODO_FAILURE, SAVE_TODO_REQUEST, SAVE_TODO_SUCCESS
} from "./actions";

const initialState = {
    todo: [],
    newTask: '',
    loading: false,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {...state, newTask: action.payload};
        case FETCH_TODO_REQUEST:
            return {...state, error: null, loading: true};
        case FETCH_TODO_SUCCESS:
            return {...state, loading: false, todo: action.payload};
        case FETCH_TODO_FAILURE:
            return {...state, loading: false};
        case ERASE:
            return {...state, newTask: ''};
        case DELETE_TODO_REQUEST:
            return {...state, loading: true, error: null};
        case DELETE_TODO_SUCCESS:
            return {...state, loading: false};
        case DELETE_TODO_FAILURE:
            return {...state, loading: false};
        case SAVE_TODO_REQUEST:
            return {...state, loading: true, error: null};
        case SAVE_TODO_SUCCESS:
            return {...state, loading: false};
        case SAVE_TODO_FAILURE:
            return {...state, loading: false};
        default:
            return state;
    }
};

export default reducer;