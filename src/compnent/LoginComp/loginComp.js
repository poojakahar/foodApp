import React, {Component} from 'react';
import {Text, View, ImageBackground,Image,Alert,TouchableOpacity,Linking} from 'react-native';
import Card from "../Card";
import CardSection from "../CardSection";
import Button from "../Button";
import Input from "../Input";
import styles from './../../styles/styles';

class loginComp extends Component{

    static navigationOptions={
        title: 'Sarika Restaurant'
    };

    constructor(props){
        super(props);

        this.state={
            username: '',
            password: ''
        }
    }

    onButtonPress()
    {
        fetch('http://localhost:3000/signIn',{
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        }).then((response)=>response.json()).then((responseJson)=>{
            var res = JSON.stringify(responseJson);
            var orgres=JSON.stringify('1');

            if(res==orgres)
            {
                const {navigate}=this.props.navigation;
                navigate('Home');
            }
        }).catch((err)=>{
            alert(err);
        });
    }


    render(){
        const { navigate }=this.props.navigation;

        return(
            <View>
                <ImageBackground source={require('./../../images/back1.jpg')} style={styles.imageBackStyle}>
                    <Card style={styles.cardStyle}>
                        <CardSection>
                            <Text style={styles.titleStyle}> Sign In </Text>
                        </CardSection>

                        <CardSection style={styles.cardSectionStyle}>
                            <Input placeholder='Username' title='Username' onChangeText={username=>this.setState({username})} value={this.state.username} textInputStyle={styles.textInputStyle} textInputContainerStyle={styles.textInputContainerStyle} inputTitleStyle={styles.inputTitleStyle}/>
                        </CardSection>

                        <CardSection style={styles.cardSectionStyle}>
                            <Input placeholder='Password' title='Password' onChangeText={password=>this.setState({password})} value={this.state.password} textInputStyle={styles.textInputStyle} textInputContainerStyle={styles.textInputContainerStyle} inputTitleStyle={styles.inputTitleStyle} secureTextEntry/>
                        </CardSection>

                        <CardSection style={styles.cardSectionStyle}>
                            <Button title={'Sign In'} buttonContainerStyle={styles.buttonContainerStyle} buttonStyle={styles.buttonStyle} onPress={this.onButtonPress.bind(this)}/>
                        </CardSection>

                        <CardSection style={styles.signUpCardSection}>
                            <Button title={'Sign Up'} buttonStyle={styles.buttonStyle} buttonContainerStyle={styles.signUpContainerStyle} onPress={()=>navigate('SignUp')}/>
                        </CardSection>
                    </Card>

                    <Card style={[styles.cardStyle,styles.loginContainerStyle]}>

                            <CardSection>
                                <Image source={require('./../../images/facebook-32.png')}/>
                            </CardSection>
                            <CardSection>
                                <TouchableOpacity onPress={()=>{Linking.openURL('http://localhost:3000/auth/google')}}>
                                    <Image source={require('./../../images/google-plus-32.png')}/>
                                </TouchableOpacity>
                            </CardSection>
                            <CardSection>
                                <Image source={require('./../../images/twitter-32.png')}/>
                            </CardSection>
                            <CardSection>
                                <Image source={require('./../../images/github-32.png')}/>
                            </CardSection>
                        </Card>
                </ImageBackground>
            </View>
        );
    }
}

/*const styles={
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

    loginContianerStyle:{
        justifyContent:'space-around',
        flexDirection: 'row'
    },

    loginImageStyle:{
        height: '30%'
    }
};*/

export default loginComp;