import {combineReducers} from 'redux';
import CategoryReducer from './CategoryReducer';
import SubcategoryReducer from './SubcategoryReducer';
import UserReducer from './UserReducer'

//debugger
const AppReducer=combineReducers({
    Category: CategoryReducer,
    Subcategory:SubcategoryReducer,
    User:UserReducer
})

export default AppReducer