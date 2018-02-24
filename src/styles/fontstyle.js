import React from 'react';
import {Dimensions,StyleSheet} from 'react-native';

var screenWidth=Dimensions.get('window').width;
var screenHeight=Dimensions.get('window').height;
var darkColor='#8B4513';
var lightColor='#fff8dc';

const fontstyle=StyleSheet.create({
    //LoginComp
    imageBackStyle:{
        height:screenHeight,
        width:screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch'
    },

    loginCardStyle:{
        borderRadius: 20,
        shadowColor: darkColor,
        shadowOffset:{width: 0,height: 2},
        shadowOpacity: 0.7,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 5,
        width: (screenWidth*0.8),
        height:screenHeight*0.5,
        opacity: 0.7,
        backgroundColor: lightColor
    },

    loginTitleStyle:{
        fontSize: (screenWidth*50)/screenHeight,
        fontWeight: '700',
        alignSelf: 'center',
        color: '#8B4513'
    },

    loginCardSectionStyle:{
        padding: 10
    },

    signUpCardSection:{
        padding: 10,
        alignItems: 'center',
        width: screenWidth*0.5,
        alignSelf:'center'
    },
});

export default fontstyle;