import {actions as t} from '../actions/authentication';

const initState = {
    name: ''
}

export default function reducer(state=initState,action){
    switch (action.type) {
        case t.TEST:
            return{
                ...state,
                name: 'hahaha'
            }
        default:
            return state;
    }
}