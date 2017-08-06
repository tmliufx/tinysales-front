const initialState = {
    loginStatus: 'LOGGED_OUT',
    loginedPlatform: false,
    loginedRong: false,
    username: ''
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_USER':
            return { ...state, ...action.user };
        case 'WELCOME_PAGE': {
            return { ...state };
        }
        default:
            return state;
    }
}