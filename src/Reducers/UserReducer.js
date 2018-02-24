import {SIGN_IN, SIGN_UP} from '../Actions/ActionType'

const INITIAL_STATE={
    userdata:[],
    status:0,
    token:''
}

var UserReducer=(state=INITIAL_STATE,action)=>{
    //debugger
    switch (action.type)
    {
        case SIGN_UP:
            //debugger
            return{
                ...state,
                userdata:action.payload,
                status:action.status
            }

        case SIGN_IN:
            //debugger
            return{
                ...state,
                token:action.payload,
                status:action.status
            }

        default:
            return state
    }
}

export default UserReducer;