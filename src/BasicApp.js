import React from 'react';
import {StackNavigator, DrawerNavigator} from 'react-navigation';

import loginComp from './compnent/LoginComp/loginComp';
import signUpComp from './compnent/LoginComp/signUpComp';
import logout from './compnent/LoginComp/logout';
import MainComp from './compnent/MainComp';
import Gallery from './compnent/Gallery';
import Menu from './compnent/NewMenu';
import Cart from './compnent/Cart';
import SubMenu from "./compnent/SubMenu";
import wishList from './compnent/wishList';
import {responsiveHeight, responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions';

var HomeScreenRouter = DrawerNavigator({
    Home: {screen: MainComp},
    Menu: {screen:Menu},
    Gallery: {screen: Gallery},
    Cart:{screen:Cart},
    'Wish List':{screen:wishList},
    Logout:{screen: logout}
});

const BasicApp = StackNavigator({
    Main: {screen: loginComp},
    SignUp: {screen: signUpComp},
    Home: {screen: HomeScreenRouter},
    SubMenu:{screen:SubMenu},
},{
    navigationOptions:{
        headerStyle:{
            backgroundColor: '#fff8dc',
            height: responsiveHeight(10)
        },
        headerTitleStyle:{
            color:'#8B4513',
            fontSize: responsiveFontSize(3)
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