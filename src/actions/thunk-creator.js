import * as actionCreators from './action-creator';

export function updateUserInfo(user) {
    return (dispatch) => {
        dispatch(actionCreators.updateUser(user));
    };
}
