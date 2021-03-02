export const CREATE_USER = 'CREATE_USER';
export const createUser = newUser => ({
    type: CREATE_USER,
    payload: newUser
});
