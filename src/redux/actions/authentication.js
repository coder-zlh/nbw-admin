export const  actions = {
    "TEST": Symbol('test'),

    "LOGOUT": Symbol("LOGOUT"),
    "LOGOUT_SUCCESS": Symbol("LOGOUT_SUCCESS"),
    "LOGOUT_FAIL": Symbol("LOGOUT_FAIL"),
}

export function test(){
    return{
        type: actions.TEST,
    }
}

export function logout(){
    return{
        types: [actions.LOGOUT,actions.LOGOUT_SUCCESS,actions.LOGOUT_FAIL]
    }
}