import { CREATE_USER } from '../actions/userActions';

const initialState = {
    currentUser: [],

};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case CREATE_USER:
            return {
                ...state,
                currentUser: [...state.currentUser, action.payload],
            };

        default:
            return state;
    }
}
