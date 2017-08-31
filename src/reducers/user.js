const initialState = {
    username: ''
};

export default function user(state = initialState, action) {
    switch (action.type) {
    case 'UPDATE_USER':
        return { state, ...action.user };
    default:
        return state;
    }
}
