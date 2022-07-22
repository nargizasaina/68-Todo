import {ADD} from "./actions";

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
        default:
            return state;
    }
};

export default reducer;