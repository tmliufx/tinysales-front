import { actionTypes } from '../constants';

const initialState = {
    tabIndex: 0,
    welcomeIndex: 0,
};

export default function current(state = initialState, action = {}) {
    switch (action.type) {
        case actionTypes.UPDATE_CURRENT:
            return { ...state, ...action.current };
        default:
            return state;
    }
}