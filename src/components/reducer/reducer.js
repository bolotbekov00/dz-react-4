export const UPDATE_USER = 'UPDATE_USER';

export const updateUser = (userData) => {
    return {
        type: UPDATE_USER,
        payload: userData,
    };
};

const initialState = {
    name: '',
    age: 0,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
