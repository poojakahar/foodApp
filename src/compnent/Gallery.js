import React,{Component} from 'react';
import {Text,View,TouchableOpacity,Image} from 'react-native';
import style from './../styles/styles';

class Gallery extends Component
{
    static navigationOptions=({navigation})=>({
        title: 'Gallery',
        headerLeft: <View style={style.menuButtonStyle}>
                        <TouchableOpacity onPress={()=>navigation.navigate("DrawerOpen")}>
                            <Image source={require('./../images/menu.png')}/>
                        </TouchableOpacity>
                    </View>


    })

    render(){
        return(
          <View>
              <Text>
                  Hello
              </Text>
          </View>
        );
    }
}

export default Gallery;