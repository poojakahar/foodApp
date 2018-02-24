import {GET_DATA} from "./ActionType";
import APIConst from '../APIs/APIConst'
import API from '../APIs/API'

var CategoryAction=()=>{
    //debugger
    var url=APIConst.BASE_URL + APIConst.category;
    return(dispatch,getState)=>{
        console.log(APIConst.BASE_URL + APIConst.category)
        return API(url,'get',{},{}).then((response)=>{
           //debugger
            dispatch({
                type:GET_DATA,
                payload:response.data
            })
            //debugger
            //return Promise.resolve(response.data)
        },(err)=>{
            return Promise.reject(err)
        }).catch((err)=>{
            return Promise.reject(err)
        })
    }
}
export default CategoryAction;