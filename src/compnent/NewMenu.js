import React , {Component} from 'react';
import {ScrollView,Text,View,Alert,ActivityIndicator,TouchableOpacity,Image,ImageBackground,TouchableHighlight} from 'react-native';
import axios from 'axios';
import Card from "./Card";
import CardSection from "./CardSection";
import MenuComp from './MenuComp'
import styles from './../styles/styles'
import CategoryAction from '../Actions/CategoryAction'
import {connect} from 'react-redux'

class Menu extends Component
{
    static navigationOptions=({navigation})=>({
        title: 'Menu',
        headerLeft: <View style={styles.menuButtonStyle}>
            <TouchableOpacity onPress={()=>navigation.navigate("DrawerOpen")}>
                <Image source={require('./../images/menu.png')}/>
            </TouchableOpacity>
        </View>
    })

    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        //debugger
        this.props.onCategoryAction();
    }

    shouldComponentUpdate(nextProps,nextState)
    {
        //debugger
        console.log(nextProps)
        return true;
    }


    render()
    {
        //debugger
        return(
            <ScrollView style={style.viewStyle}>
                <Card style={style.cardStyle}>
                    {
                        this.props.category.map((data,key)=>{
                                return <TouchableOpacity onPress={()=>this.props.navigation.navigate('SubMenu',{data})} key={key}>
                                    <CardSection style={style.cardSectionStyle} >
                                        <ImageBackground source={{uri:data.image}} style={style.categoryImageStyle}>
                                            <View style={style.textViewStyle}>
                                                <Text style={style.textStyle}>{data.category_name}</Text>
                                            </View>
                                        </ImageBackground>
                                    </CardSection>
                                </TouchableOpacity>
                            }
                        )
                    }
                </Card>
            </ScrollView>
        );
    }
}

const mapStateToProps=state=>{
    //debugger
    console.log("MapStateToProps");
    console.log(state);
    return{
        category:state.Category.category
    }
}

const mapDispatchToProps=(dispatch)=>{
    //debugger
    return{
        onCategoryAction:()=>{
            dispatch(CategoryAction());
        }
    }
}
//debugger
export default connect(mapStateToProps,mapDispatchToProps)(Menu);
//export default Menu

const style={
    viewStyle:{
        height:'100%',
        backgroundColor: '#fff8dc'
    },
    cardStyle:{
        flex:1,
        shadowColor: '#8B4513',
        shadowOffset:{width: 0,height: 2},
        shadowOpacity: 0.7,
        backgroundColor: 'transparent'
    },
    cardSectionStyle:{
        margin: 5,
        height: 200
    },
    categoryImageStyle:{
        flex:1,
        width: '100%',
        alignItems: 'center',
        justifyContent:'flex-end'
    },
    textViewStyle:{
            shadowColor: '#8B4513',
            shadowOffset:{width: 0,height: 2},
            shadowOpacity: 0.7,
            opacity: 0.7,
            width: '100%',
            backgroundColor: '#fff8dc',
            alignItems: 'center'
    },
    textStyle:{
        //color: '#fff',
        fontWeight:'700',
        fontSize: 30
    }
}
//http://www.exmaple.com/googleAuth
//194405
//Client-ID: 290492513443-a4kco5jkovtr8o6es8v0couvn3hc0hqn.apps.googleusercontent.com
//Client-secret:  YGi67WoaxP2ItM3hchnj4JeQ