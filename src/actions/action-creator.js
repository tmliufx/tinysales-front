import { actionTypes } from '../constants';

export function updateCurrent(current) {
    return {
        type: actionTypes.UPDATE_CURRENT,
        current
    };
}

export function updateUser(user) {
    return {
        type: actionTypes.UPDATE_USER,
        user
    };
}

export function updateLatestMessage(message) {
    return {
        type: actionTypes.UPDATE_LATEST_MESSAGE,
        message
    };
}

export function updateSystem(info) {
    return {
        type: actionTypes.UPDATE_SYSTEM,
        info
    };
}