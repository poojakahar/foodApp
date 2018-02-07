import React from 'react';
import {View, Text} from 'react-native';

const Card=(props)=>{
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
        flexDirection: 'row',
        borderWidth: 2,
    }
};

export default Card;