import {GET_DATA} from '../Actions/ActionType'

const INITIAL_STATE={
    category:[]
}

var CategoryReducer=(state=INITIAL_STATE,action)=>{
    //debugger
    switch(action.type)
    {
        case GET_DATA:
            //debugger
            return {
                ...state,
                category:action.payload
            }

        default:
            return state
    }
}

export default CategoryReducer;