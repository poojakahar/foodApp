import axios from 'axios'

var API=(url,type='get',data={},header={})=>{
    //debugger
    let reqHeader=Object.assign(header,{"Accept":"application/json","content-type":"application/json"});

    if(type=='get')
    {
        //debugger
        return axios.get(url,{headers:reqHeader}).then((response)=>{
            return Promise.resolve(response);
        },(err)=>{
            return Promise.reject(err);
        }).catch((err)=>{
            return Promise.reject(err);
        })
    }
    else if(type='post')
    {
        //debugger
        return axios.post(url,data,{headers:reqHeader}).then((response)=>{
            return Promise.resolve(response)
        },(err)=>{
            return Promise.reject(err)
        }).catch((err)=>{
            return Promise.reject(err)
        })
    }
}

export default API