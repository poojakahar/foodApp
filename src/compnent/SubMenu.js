import React , {Component} from 'react';
import {ScrollView,Text,View,Alert,ActivityIndicator,TouchableOpacity,Image,ImageBackground,Dimensions,AsyncStorage} from 'react-native';
import Card from "./Card";
import CardSection from "./CardSection";
import styles from './../styles/styles'
import Button from "./Button";
import {connect} from "react-redux"
import SubcategoryAction from '../Actions/SubcategoryAction'

var cartItem=[];
class SubMenu extends Component
{
    static navigationOptions=({navigation})=> {
        const cart = navigation.state.params.cart ? navigation.state.params.cart : 0;
        alert(cart);
        return ({
            title: navigation.state.params.data.category_name,
            headerRight: <View style={styles.cartViewStyle}>
                            <Text style={styles.cartTextStyle}>{cart}</Text>
                        </View>
        })
    }

    constructor(props)
    {
        super(props);
        //AsyncStorage.clear()
    }

    componentDidMount()
    {
        //console.log("In Subcategory componenetDidMount")
        //console.log(this.props.navigation.state.params.data);
        this.props.onSubcategoryAction(this.props.navigation.state.params.data._id);
    }

    componentWillUnmount()
    {
        this.props.navigation.state.params.onBack();
    }

    shouldComponentUpdate(nextProps,nextState)
    {
            return true
    }

    addToCartItem(data)
    {
        //debugger

        AsyncStorage.getItem('cartItem').then((response)=>{
            //debugger
            if(response)
            {
                cartItem=JSON.parse(response)
                //debugger
                console.log(response)
                //debugger
            }

            cartItem.push(data);
            this.props.navigation.setParams({cart:cartItem.length})

            //debugger

            AsyncStorage.setItem('cartItem',JSON.stringify(cartItem))
        },(err)=>{
            alert('In cart cnt: ' + err)
        }).catch((err)=>{
            alert('In cart catch cnt: ' + err)
        })
    }

    renderSubmenu()
    {
        return(
            this.props.subcategory.map((data,key)=>{
                    return <CardSection style={style.cardSectionStyle} key={key}>
                        <ImageBackground source={{uri:data.image}} style={style.categoryImageStyle}>
                            <View style={style.textViewStyle}>
                                <Text style={style.textStyle}>{data.subcategory_name}</Text>
                            </View>
                        </ImageBackground>

                        <View style={[style.textViewStyle,style.priceViewStyle]}>
                            <Text style={style.textStyle}>{'Rs. '+ data.price}</Text>
                            <Button title='Add to Cart' onPress={this.addToCartItem.bind(this,data)} buttonStyle={[style.textStyle,style.cartButtonStyle]}/>
                        </View>
                    </CardSection>
                }
            )
        )
    }

    render()
    {
        return(
            <ScrollView style={style.viewStyle}>
                <Card style={style.cardStyle}>
                    {
                        this.renderSubmenu()
                    }
                </Card>
            </ScrollView>
        );
    }
}


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
        backgroundColor: 'transparent',
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent: 'space-between'
    },
    cardSectionStyle:{
        padding: 5,
        height: 150,
        width:Dimensions.get('window').width/2
        //width:'45%'
    },
    categoryImageStyle:{
        flex:1,
        //width: '100%',
        alignItems: 'center',
        justifyContent:'flex-end'
    },
    textViewStyle:{
        shadowColor: '#8B4513',
        shadowOffset:{width: 0,height: 2},
        shadowOpacity: 0.7,
        opacity: 0.7,
        width:'100%',
        backgroundColor: '#fff8dc',
        alignItems: 'center'
    },
    textStyle:{
        //color: '#fff',
        fontWeight:'700',
        fontSize: 15
    },
    priceViewStyle:{
        justifyContent:'space-around',
        flexDirection: 'row'
    },
    cartButtonStyle:{
        color:'#0000ff'
    }
}

const mapStateToProps=state=>{
    //debugger
    console.log("MapStateToProps");
    console.log(state);
    return{
        subcategory:state.Subcategory.subcategory
    }
}

const mapDispatchToProps=(dispatch)=>{
    //debugger
    return{
        onSubcategoryAction:(props)=>{
            dispatch(SubcategoryAction(props));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SubMenu);
//http://www.exmaple.com/googleAuth
//194405
//Client-ID: 290492513443-a4kco5jkovtr8o6es8v0couvn3hc0hqn.apps.googleusercontent.com
//Client-secret:  YGi67WoaxP2ItM3hchnj4JeQ


/*
componentDidMount()
    {
        this.cartCount()
        //this.setState({cnt:this.state.cartItems.length})
        //console.log("State: "+this.state.cnt)
    }

    componentWillUnmount()
    {
        AsyncStorage.setItem('cartItems',JSON.stringify(this.state.cartItems))
        AsyncStorage.setItem('cnt',JSON.stringify(this.state.cartItems.length))
    }

    cartCount(cartItems)
    {
        //console.log(this.state)
        this.setState({cnt: this.state.cnt+1});
        this.props.navigation.setParams({cart:this.state.cnt})
        //alert(cartItems);

        var arrItems=[]

        if (this.state.cartItems == null) {}
        else
        {
            arrItems=this.state.cartItems;
        }

        arrItems.push(cartItems);
        this.setState({cartItems:arrItems})
        console.log(this.state);
        //console.log(this.state.cartItems);
    }

    setStorage()
    {
        AsyncStorage.getItem('cartItems').then((response)=>{
            this.setState({cartItems:JSON.parse(response)})
        })

        AsyncStorage.getItem('cnt').then((response)=>{
            this.setState({cnt:JSON.parse(response)})
        });
    }
 */