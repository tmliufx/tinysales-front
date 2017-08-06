import * as actionCreators from './action-creator';
import { loginStatus } from '../constants';

export function updateUserInfo(user) {
    return (dispatch) => {
        dispatch(actionCreators.updateUser(user));
    };
}
