import {StyleSheet} from 'react-native';
import {responsiveHeight, responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions';

var darkColor='#8B4513';
var lightColor='#fff8dc';
var labelFontSize=responsiveHeight(3);
var InputFontSize=responsiveHeight(2.8);

const styles= StyleSheet.create({

    //loginComp
    imageBackStyle:{
        height:responsiveHeight(100),
        width:responsiveWidth(100),
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
        width: responsiveWidth(80),
        //height:responsiveHeight(50),
        opacity: 0.7,
        backgroundColor: lightColor,
        //borderWidth: 1
    },

    loginTitleStyle:{
        fontSize: responsiveFontSize(4),
        fontWeight: '700',
        alignSelf: 'center',
        color: darkColor
    },

    loginCardSectionStyle:{
        padding: 5,
        //borderWidth: 3
    },

    loginSignUpCardSection:{
        padding: 5,
        alignItems: 'center',
        width: responsiveWidth(50),
        alignSelf:'center'
    },

    loginTextInputContainerStyle:{
        justifyContent: 'space-around',
        alignItems: 'center',
        height: responsiveHeight(10),
        flexDirection: 'row'
        //justifyContent:'flex-start'
    },

    loginTextInputStyle:{
        fontSize: InputFontSize,
        color: darkColor,
        margin:5,
        borderBottomColor: darkColor,
        borderBottomWidth: 2,
        width: responsiveWidth(45)
    },

    loginInputTitleStyle:{
        fontSize: labelFontSize,
        fontWeight: '700',
        color: darkColor,
        paddingRight: 5,
        paddingLeft: 5,
        marginTop: 5,
        marginBottom: 5
    },

    loginButtonContainerStyle:{
        borderColor: darkColor,
        borderWidth: 2,
        borderRadius: 10,
        elevation: 1
    },

    loginSignUpContainerStyle:{
        borderBottomColor:darkColor,
        borderBottomWidth: 2
    },

    loginButtonStyle:{
        color: darkColor,
        fontSize: labelFontSize,
        fontWeight: '900',
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 5
    },

    loginOptContainerStyle:{
        justifyContent:'space-around',
        flexDirection: 'row'
    },

    loginOptImgStyle:{
        width: responsiveWidth(7),
        height: responsiveHeight(7)
    },
//--------------------------------------------------------

    titleStyle:{
        fontSize: 30,
        fontWeight: '700',
        alignSelf: 'center',
        color: '#8B4513'
    },

    inputTitleStyle:{
        fontSize: 18,
        fontWeight: '700',
        color: '#8B4513',
        paddingRight: 5,
        paddingLeft: 5,
        marginTop: 5,
        marginBottom: 5
    },

    loginImageStyle:{
        height: '30%'
    },



    menuButtonStyle:{
        padding: 5,
        borderWidth: 2,
        borderRadius: 3,
        borderColor: '#8B4513'

    },

    cartViewStyle:{
        padding: 5,
        borderWidth: 2,
        borderRadius: 50,
        borderColor: '#8B4513',
        width:35,
        alignItems:'center'
    },

    cartTextStyle:{
        color:'#8B4513',
        fontSize: 15,
        fontWeight: '700'
    }
});

export default styles;