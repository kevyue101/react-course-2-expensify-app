import authReducer from '../../reducers/auth';

test('should set uid with login', () => {
    const action = {
        type: 'LOGIN',
        uid: "1"
    }
    const state = authReducer(undefined, action);
    console.log(state);
    expect(state.uid).toEqual("1");
});

test('should clear uid when log out', () => {
    const uid = "1"
    const state = authReducer({ uid }, {type: 'LOGOUT'});
    console.log(state);
    expect(state).toEqual({});
});