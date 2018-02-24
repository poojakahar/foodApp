import React,{Component} from 'react';
import {Text,View,AsyncStorage} from 'react-native';
import axios from 'axios';

class logout extends Component
{
    logout()
    {
        AsyncStorage.getItem("Token").then((response)=>{
            axios.post('http://localhost:3000/logout?token='+response).then((response)=>{
                var res=JSON.stringify(response.data);
                var orgres=JSON.stringify("1");

                if(res==orgres)
                {
                    this.props.navigation.navigate('Main');
                    AsyncStorage.removeItem("Token")
                }
            },(err)=>{
                alert(err)
            }).catch((err)=>{
                alert(err)
            })
        },(err)=>{
            alert(err)
        }).catch((err)=>{
            alert(err)
        })

    }
    render(){
        return(
            <View>
                {
                    this.logout()
                }
            </View>
        )
    }
}

export default logout;