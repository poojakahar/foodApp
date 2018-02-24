import React, {Component} from 'react';
import {Text, View, ImageBackground,Image} from 'react-native';
import Card from "../Card";
import CardSection from "../CardSection";
import Button from "../Button";
import Input from "../Input";
import styles from './../../styles/styles';
import {connect,bindActionCreators} from 'react-redux'
import {UserSignUp} from '../../Actions/UserAction'
import {NavigationActions} from 'react-navigation'

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
        this.props.UserSignUp({
            username:this.state.username,
            password:this.state.password
        });
        //debugger
        //console.log(this.props.status)

    }

    componentWillReceiveProps(nextProps)
    {
        console.log("CompoentWillReceive Props")
        console.log(nextProps.status)
        var res=nextProps.status
        if(res==200)
        {
            //alert('Sucess')
            //this.props.navigation.navigate('Main')
            this.props.navigation.dispatch(NavigationActions.reset({
                index:0,
                actions:[
                    NavigationActions.navigate({
                        routeName: 'Main'
                    })
                ]
            }))
        }
        else
        {
            alert('Fail')
        }
    }

    render(){
        return(
            <View>
                <ImageBackground source={require('./../../images/back1.jpg')} style={styles.imageBackStyle}>
                    <Card style={styles.loginCardStyle}>
                        <CardSection>
                            <Text style={styles.loginTitleStyle}> Sign Up </Text>
                        </CardSection>

                        <CardSection style={styles.loginCardSectionStyle}>
                            <Input placeholder='Username' title='Username' onChangeText={username=>this.setState({username})} value={this.state.username} textInputStyle={styles.loginTextInputStyle} textInputContainerStyle={styles.loginTextInputContainerStyle} inputTitleStyle={styles.loginInputTitleStyle}/>
                        </CardSection>

                        <CardSection style={styles.loginCardSectionStyle}>
                            <Input placeholder='Password' title='Password' onChangeText={password=>this.setState({password})} value={this.state.password} textInputStyle={styles.loginTextInputStyle} textInputContainerStyle={styles.loginTextInputContainerStyle} inputTitleStyle={styles.loginInputTitleStyle} secureTextEntry/>
                        </CardSection>

                        <CardSection style={styles.loginCardSectionStyle}>
                            <Button title={'Sign Up'} onPress={this.onButtonPress.bind(this)} buttonContainerStyle={styles.loginButtonContainerStyle} buttonStyle={styles.loginButtonStyle}/>
                        </CardSection>
                    </Card>
                </ImageBackground>
            </View>
        );
    }
}

const mapStateToProps=state=>{
    //debugger
    console.log("MapStateToProps");
    console.log(state);
    return{
        userdata:state.User.userdata,
        status:state.User.status
    }
}

const mapDispatchToProps=(dispatch)=>{
    //debugger
    /*return{
        onUserAction:(data)=>{
            dispatch(UserAction(data));
        }
    }*/

    return bindActionCreators(UserAction,dispatch)
}

export default connect(mapStateToProps,{
    UserSignUp
})(loginComp);