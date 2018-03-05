//class that store cartItem

import React from 'react'
import {AsyncStorage} from 'react-native'

//var cartItem=[];
/*class CartItem extends Component
{
    //static cartItem=[];
    constructor(props)
    {
        super(props)
        this.state={
            cartItem:[]
        }
    }

    getCart()
    {
        AsyncStorage.getItem('cartItem').then((response)=>{
            if(response)
            {
                return JSON.parse(response);
            }
        },(err)=>{
            alert('In cart cnt: ' + err)
        }).catch((err)=>{
            alert('In cart catch cnt: ' + err)
        })
    }
}

export default CartItem*/

const getCart=()=> {
    AsyncStorage.getItem('cartItem').then((response)=>{
        if(response)
        {
            return JSON.parse(response);
        }
    },(err)=>{
        alert('In cart cnt: ' + err)
    }).catch((err)=>{
        alert('In cart catch cnt: ' + err)
    })
}

export default getCart