import {SUB_CAT_GET_DATA} from './ActionType'
import APIConst from '../APIs/APIConst'
import API from '../APIs/API'

var SubcategoryAction=(props)=>{
    var url=APIConst.BASE_URL+APIConst.subcategory+"?id="+props;

    console.log("Subcategory Action")
    console.log(props)

    return(dispatch,getState)=>{
        return API(url,'get',{},{}).then((response)=>{
            dispatch({
                type:SUB_CAT_GET_DATA,
                payload:response.data
            })
        },(err)=>{
            return Promise.reject(err)
        }).catch((err)=>{
            return Promise.reject(err)
        })
    }
}

export default SubcategoryAction