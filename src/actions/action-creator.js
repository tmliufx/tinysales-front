import { userActionTypes } from '../constants';

export function updateUser(user) {
    return {
        type: userActionTypes.UPDATE_USER,
        user
    };
}