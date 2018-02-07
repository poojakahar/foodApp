import {StyleSheet} from 'react-native';

const styles= StyleSheet.create({
    imageBackStyle:{
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch'
    },

    cardStyle:{
        borderRadius: 20,
        shadowColor: '#8B4513',
        shadowOffset:{width: 0,height: 2},
        shadowOpacity: 0.7,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 5,
        width: '80%',
        opacity: 0.7,
        backgroundColor: '#fff8dc'
    },

    cardSectionStyle:{
        padding: 10
    },

    buttonContainerStyle:{
        borderColor: '#8B4513',
        borderWidth: 2,
        borderRadius: 10,
        elevation: 1,
        marginTop: 10,
    },

    buttonStyle:{
        color: '#8B4513',
        fontSize: 18,
        fontWeight: '900',
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 5
    },

    titleStyle:{
        fontSize: 30,
        fontWeight: '700',
        alignSelf: 'center',
        color: '#8B4513'
    },

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
    },

    loginContainerStyle:{
        justifyContent:'space-around',
        flexDirection: 'row'
    },

    loginImageStyle:{
        height: '30%'
    },

    signUpCardSection:{
        padding: 10,
        alignItems: 'center',
        width: '50%',
        alignSelf:'center'
    },

    signUpContainerStyle:{
        borderBottomColor:'#8B4513',
        borderBottomWidth: 2
    },

    menuButtonStyle:{
        padding: 5,
        borderWidth: 2,
        borderRadius: 3,
        borderColor: '#8B4513'

    }
});

export default styles;