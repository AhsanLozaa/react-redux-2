import { decrement } from "../actions";

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return increase(state);
        case "DECREMENT":
            return decrease(state);
        case "RESET":
            return 0;
        default:
            return state;
    }
}

function increase(state) {
    return state + 1;
}

function decrease(state) {
    return state - 1;
}

export default counterReducer;