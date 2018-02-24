import {SIGN_UP,SIGN_IN} from "./ActionType";
import API from '../APIs/API';
import APIConst from '../APIs/APIConst'

var url=APIConst.BASE_URL;
export const UserSignUp=(data)=>{
    url+=APIConst.signUp;

    return(dispatch,getState)=>{
        //debugger
        return API(url,'post',data,{}).then((response)=>{
            //debugger
            dispatch({
                type:SIGN_UP,
                payload:response.data,
                status:response.status
            })
        },(err)=>{
            return Promise.reject(err)
        }).catch((err)=>{
            return Promise.reject(err)
        })
    }
}

export const UserSignIn=(data)=>{
    url+=APIConst.signIn;

    return(dispatch,getState)=>{
        //debugger
        return API(url,'post',data,{}).then((response)=>{
            //debugger
            dispatch({
                type:SIGN_IN,
                payload:response.data,
                status:response.status
            })
        },(err)=>{
            return Promise.reject(err)
        }).catch((err)=>{
            return Promise.reject(err)
        })
    }
}

//export default UserAction;