import React from 'react';
import loginComp from './compnent/LoginComp/loginComp';
import signUpComp from './compnent/LoginComp/signUpComp';
import MainComp from './compnent/MainComp';
import Gallery from './compnent/Gallery';
import Menu from './compnent/NewMenu';
import {StackNavigator, DrawerNavigator} from 'react-navigation';

var HomeScreenRouter = DrawerNavigator({
    Home: {screen: MainComp},
    Menu: {screen:Menu},
    Gallery: {screen: Gallery}
});

const BasicApp = StackNavigator({
    Main: {screen: loginComp},
    SignUp: {screen: signUpComp},
    Home: {screen: HomeScreenRouter}
},{
    navigationOptions:{
        headerStyle:{
            backgroundColor: '#fff8dc',
        },
        headerTitleStyle:{
            color:'#8B4513',
            fontSize: 20
        },
        headerBackTitleStyle:{
            color:'#8B4513',
            fontSize: 15
        },
        headerTintColor:'#8B4513'
    }
});

/*const NavDrawer = DrawerNavigator({
    Home: {screen: BasicApp.Home}
});*/

export default BasicApp;