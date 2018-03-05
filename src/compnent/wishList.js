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


//var CartItems=[];

class wishList extends Component
{
    static navigationOptions=({navigation})=>({
        title: 'Wish List',
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
            wishList:[]
        }
    }

    getWishList()
    {
        AsyncStorage.getItem('wishList').then((response)=>{
            if(response)
            {
                this.setState({wishList:JSON.parse(response)})
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
        this.getWishList();
    }

    renderWishList()
    {
        console.log('In renderCartItem ')
        console.log(this.state.wishList)

        return(
            this.state.wishList.map((value,key)=>{
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
                            <Button title='Add to Cart' onPress={this.addToCartItem.bind(this,data)} buttonStyle={[style.textStyle,style.cartButtonStyle]}/>
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
                            this.renderWishList()
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

export default wishList