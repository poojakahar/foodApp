import React,{Component} from 'react';
import {View,Text,AsyncStorage,Image,ScrollView,TouchableOpacity,TextInput} from 'react-native';
import Card from "./Card";
import CardSection from "./CardSection";
import styles from '../styles/styles'
import NumericUpDown from './NumericUpDown'
//import CheckBox from 'react-native-checkbox'
//import CheckBox from 'react-native-checkbox-master'
import CheckBox from './CheckBox'
import Button from './Button'
import getCart from './CommanClass/CartItem'


//var CartItems=[];

class Cart extends Component
{
    static navigationOptions=({navigation})=>({
        title: 'Cart',
        headerLeft: <View style={styles.menuButtonStyle}>
            <TouchableOpacity onPress={()=>navigation.navigate("DrawerOpen")}>
                <Image source={require('./../images/menu.png')}/>
            </TouchableOpacity>
        </View>
    })

    constructor(props)
    {
        super(props)
        this.state={
            CartItems:[],
            OrderItems:[],
            wishList:[],
            cartI:[]
        }
    }

    getCartItems()
    {
        AsyncStorage.getItem('cartItem').then((response)=>{
            if(response)
            {
                this.setState({CartItems:JSON.parse(response)})
            }
            //console.log('In getcartItem ')
            //console.log(CartItems)
        },(err)=>{
            alert('In cart cnt: ' + err)
        }).catch((err)=>{
            alert('In cart catch cnt: ' + err)
        })
    }

    componentWillMount()
    {
        this.getCartItems();
        console.log('Hello')
        console.log(getCart());
        //this.setState({cartI:this.getCart()})
        //console.log('compoenetWillMount');
        //console.log(CartItem.cartItem);
        //console.log(this.state.cartI);
    }

    renderCartItems()
    {
        console.log('In renderCartItem ')
        console.log(this.state.CartItems)

        return(
            this.state.CartItems.map((value,key)=>{
                return(
                    <Card key={key} style={styles.cartCardStyle}>
                        <CardSection style={styles.cartCardSectionStyle}>
                            <Image source={{uri:value.image}} style={styles.cartImageStyle}/>
                        </CardSection>

                        <CardSection style={styles.cartCardSectionStyle}>
                            <Text style={styles.cartDataStyle}>{value.subcategory_name}</Text>
                            <Text style={styles.cartDataStyle}>Rs. {value.price}</Text>
                        </CardSection>

                        <CardSection style={[styles.cartCardSectionStyle,styles.cartRemoveButtonStyle]}>
                            <Button title='Add to Wish List' buttonStyle={[styles.textStyle,styles.cartButtonStyle]}/>
                            <TouchableOpacity onPress={()=>this.removeCartItems(key)}>
                                <Image source={require('../images/cartRemove.png')} style={styles.cartImageButtonStyle}/>
                            </TouchableOpacity>
                        </CardSection>
                    </Card>
                )
            })
        )
    }

    removeCartItems(key)
    {
        this.state.CartItems.splice(key,1);
        AsyncStorage.setItem("cartItem",JSON.stringify(this.state.CartItems));
        this.getCartItems()
    }

    onOrderItems()
    {
        this.state.CartItems.map((value,key)=>{

        })
    }

    render()
    {
        return(
            <View style={styles.cartMainView}>
                <ScrollView style={styles.cartScrollViewStyle}>
                    <View style={styles.cartView}>
                    {
                        this.renderCartItems()
                    }
                    </View>
                </ScrollView>
                <View style={styles.cartOrderButtonContainer}>
                    <Button title='Order' buttonContainerStyle={styles.loginButtonContainerStyle} buttonStyle={styles.loginButtonStyle} onPress={()=>this.onOrderItems()}/>
                </View>
            </View>
        )
    }
}

export default Cart

/*
AsyncStorage.getItem('cartItem').then((response)=>{
                        if(response)
                        {
                            CartItems=JSON.parse(response)
                            console.log('In render ')
                            console.log(CartItems)

                            return(
                                CartItems.map((value,key)=>{
                                    return(
                                        <Card key={key} style={{backgroundColor:'#44ff44'}}>
                                            <CardSection>
                                                <Image source={{uri:value.image}}/>
                                            </CardSection>

                                            <CardSection>
                                                <Text>{value.subcategory_name}</Text>
                                                <Text>{value.price}</Text>
                                            </CardSection>
                                        </Card>
                                    )
                                })
                            )
                        }
                        console.log('In getcartItem ')
                        console.log(CartItems)
                    },(err)=>{
                        alert('In cart cnt: ' + err)
                    }).catch((err)=>{
                        alert('In cart catch cnt: ' + err)
                    })
 */