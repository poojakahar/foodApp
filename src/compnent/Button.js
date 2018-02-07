import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';

const Button=({title,onPress,buttonStyle,buttonContainerStyle})=>{

    return(
        <TouchableOpacity onPress={onPress}>
            <View style={buttonContainerStyle}>
                <Text style={buttonStyle}> {title} </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles={
  buttonContainerStyle:{
      borderColor: '#d88861',
      borderWidth: 1,
      borderRadius: 2,
      shadowColor: '#d88861',
      shadowOpacity: 0.3,
      shadowOffset: { width: 0,height: 2},
      elevation: 1,
      marginTop: 10
  },
  buttonStyle:{
      color: '#d88861',
      fontSize: 20,
      fontWeight: '600',
      alignSelf: 'center',
      marginTop: 5,
      marginBottom: 5
  }
};

export default Button;