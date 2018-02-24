import React, {Component} from 'react';
import {Text, View, ImageBackground,Image,Alert,TouchableOpacity,Linking, WebView,AsyncStorage} from 'react-native';
import Card from "../Card";
import CardSection from "../CardSection";
import Button from "../Button";
import Input from "../Input";
import styles from './../../styles/styles';
import {UserSignIn} from "../../Actions/UserAction";
import {connect} from 'react-redux'
import {NavigationActions} from 'react-navigation'

class loginComp extends Component{

    static navigationOptions={
        title: 'Sarika Restaurant',
        headerLeft:null
    };

    constructor(props){
        super(props);

        this.state={
            username: 'pooja',
            password: 'pooja123'
        }
    }

    onGooglePress()
    {
        Linking.openURL('http://localhost:3000/auth/google');
        //return (<WebView source={{uri:'http://localhost:3000/auth/google'}} style={{flex:1}}/>)
    }

    onGithubPress()
    {
        Linking.openURL('http://localhost:3000/auth/github');
    }

    onButtonPress()
    {
        this.props.UserSignIn({
            username: this.state.username,
            password: this.state.password
        });
    }


    componentWillReceiveProps(nextProps)
    {
        var res=nextProps.status;

        console.log("Status: " + res);

        if(res==200)
        {
            //debugger
            this.props.navigation.dispatch(NavigationActions.reset({
                index:0,
                actions:[
                    NavigationActions.navigate({
                        routeName: 'Home'
                    })
                ]
            }))
        }
        else
        {
            alert('Wrong Username or Password')
        }
    }

    render(){
        const { navigate }=this.props.navigation;

        return(
            <View>
                <ImageBackground source={require('./../../images/back1.jpg')} style={styles.imageBackStyle}>
                    <Card style={styles.loginCardStyle}>
                        <CardSection>
                            <Text style={styles.loginTitleStyle}> Sign In </Text>
                        </CardSection>

                        <CardSection style={styles.loginCardSectionStyle}>
                            <Input placeholder='Username' title='Username' onChangeText={username=>this.setState({username})} value={this.state.username} textInputStyle={styles.loginTextInputStyle} textInputContainerStyle={styles.loginTextInputContainerStyle} inputTitleStyle={styles.loginInputTitleStyle}/>
                        </CardSection>

                        <CardSection style={styles.loginCardSectionStyle}>
                            <Input placeholder='Password' title='Password' onChangeText={password=>this.setState({password})} value={this.state.password} textInputStyle={styles.loginTextInputStyle} textInputContainerStyle={styles.loginTextInputContainerStyle} inputTitleStyle={styles.loginInputTitleStyle} secureTextEntry/>
                        </CardSection>

                        <CardSection style={styles.loginCardSectionStyle}>
                            <Button title={'Sign In'} buttonContainerStyle={styles.loginButtonContainerStyle} buttonStyle={styles.loginButtonStyle} onPress={this.onButtonPress.bind(this)}/>
                        </CardSection>

                        <CardSection style={styles.loginSignUpCardSection}>
                            <Button title={'Sign Up'} buttonStyle={styles.loginButtonStyle} buttonContainerStyle={styles.loginSignUpContainerStyle} onPress={()=>navigate('SignUp')}/>
                        </CardSection>
                    </Card>

                    <Card style={[styles.loginCardStyle,styles.loginOptContainerStyle]}>
                                <Image source={require('./../../images/facebook-32.png')} resizeMode={'contain'} style={styles.loginOptImgStyle}/>

                                <TouchableOpacity onPress={()=>this.onGooglePress()}>
                                    <Image source={require('./../../images/google-plus-32.png')} resizeMode={'contain'} style={styles.loginOptImgStyle}/>
                                </TouchableOpacity>

                                <Image source={require('./../../images/twitter-32.png')} resizeMode={'contain'} style={styles.loginOptImgStyle}/>

                                <TouchableOpacity onPress={()=>this.onGithubPress()}>
                                    <Image source={require('./../../images/github-32.png')} resizeMode={'contain'} style={styles.loginOptImgStyle}/>
                                </TouchableOpacity>
                        </Card>
                </ImageBackground>
            </View>
        );
    }
}

const mapStateToProps=state=>{
    //debugger
    //debugger
    return{
        status:state.User.status
    }
}

export default connect(mapStateToProps,{
    UserSignIn
})(loginComp);