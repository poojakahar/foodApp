import React, {Component} from 'react';
import { View, TextInput,Text } from 'react-native';

const Input=({placeholder,value,onChangeText,secureTextEntry,title,textInputStyle,textInputContainerStyle,inputTitleStyle})=>{

    //var {textInputStyle,textInputContainerStyle}=styles;

    return(
        <View style={textInputContainerStyle}>
            <Text style={inputTitleStyle}>{title}</Text>
            <TextInput placeholder={placeholder}
                       onChangeText={onChangeText}
                       style={textInputStyle}
                       value={value}
                       autoCorrect={false}
                       secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles={
    textInputStyle:{
        fontSize: 18,
        color: '#8B4513',
        paddingRight: 5,
        paddingLeft: 5,
        marginTop: 5,
        marginBottom: 5,
        borderBottomColor: '#8B4513',
        borderBottomWidth: 2,
        width: '60%',
        height: '90%'
    },

    textInputContainerStyle:{
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 50,
        flexDirection: 'row'
        //justifyContent:'flex-start'
    },

    inputTitleStyle:{
        fontSize: 18,
        fontWeight: '700',
        color: '#8B4513',
        paddingRight: 5,
        paddingLeft: 5,
        marginTop: 5,
        marginBottom: 5
    }
};

export default Input;