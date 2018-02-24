import {SUB_CAT_GET_DATA} from '../Actions/ActionType'

const INITIAL_STATE={
    subcategory:[]
}

var SubcategoryReducer=(state=INITIAL_STATE,action)=>{
    //debugger
    switch(action.type)
    {
        case SUB_CAT_GET_DATA:
            //debugger
            return {
                ...state,
                subcategory:action.payload
            }

        default:
            return state
    }
}

export default SubcategoryReducer;