import React from 'react';
import {View, Text} from 'react-native';

const CardSection=(props)=>{
    return(
        <View style={props.style}>
            {props.children}
        </View>
    );
};

const styles={
    cardStyle:{
        borderColor: '#fdfdfd',
        borderRadius: 2,
        shadowOpacity: 0.7,
        shadowOffset:{ width: 0, height: 1},
        shadowColor: '#c7c7c7',
        flexDirection: 'column',
        margin: 5,
        height: 150,
        width: 113
    }
};

export default CardSection;

//http://www.exmaple.com/googleAuth
//194405
//Client-ID: 290492513443-a4kco5jkovtr8o6es8v0couvn3hc0hqn.apps.googleusercontent.com
//Client-secret:  YGi67WoaxP2ItM3hchnj4JeQ