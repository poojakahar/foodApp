import React,{Component} from 'react';
import { View,Text,Alert, ScrollView,Image,TouchableOpacity} from 'react-native';

import Header from './Header';
import Card from './Card';
import CardSection from './CardSection';
import style from './../styles/styles'

class MainComp extends Component
{
    static navigationOptions=({navigation})=>({
        title: 'Home',
        headerLeft: <View style={style.menuButtonStyle}>
                        <TouchableOpacity onPress={()=>navigation.navigate("DrawerOpen")}>
                            <Image source={require('./../images/menu.png')}/>
                        </TouchableOpacity>
                    </View>
    })

    render(){
        const {navigate}=this.props.navigation;

        return(
            <View>
                <View>
                    <Header headerContainerStyle={styles.headerContainerStyle} headerStyle={styles.headerStyle} title='Sarika Restaurant'/>
                </View>
                <ScrollView style={styles.scrollStyle}>

                    <Card style={styles.ImageCardStyle}>
                        <CardSection style={styles.ImageCardSectionStyle}>
                            <TouchableOpacity onPress={()=>{navigate('Menu')}}>
                                <Image source={require('./../images/menu.jpg')} style={styles.imageStyle}/>
                                <Text style={styles.imageContentStyle}> Menu </Text>
                            </TouchableOpacity>
                        </CardSection>

                        <CardSection style={styles.ImageCardSectionStyle}>
                            <TouchableOpacity onPress={()=>{navigate('Cart')}}>
                                <Image source={require('./../images/cart.jpg')} style={styles.imageStyle}/>
                                <Text style={styles.imageContentStyle}> Cart </Text>
                            </TouchableOpacity>
                        </CardSection>

                        <CardSection style={styles.ImageCardSectionStyle}>
                            <Image source={require('./../images/menu.jpg')} style={styles.imageStyle}/>
                            <Text style={styles.imageContentStyle}> Reservation </Text>
                        </CardSection>
                    </Card>

                    <Card style={styles.ImageCardStyle}>
                        <CardSection style={styles.ImageCardSectionStyle}>
                            <TouchableOpacity onPress={()=>{navigate('Gallery')}}>
                                <Image source={require('./../images/gallery.jpg')} style={styles.imageStyle}/>
                                <Text style={styles.imageContentStyle}> Gallery </Text>
                            </TouchableOpacity>
                        </CardSection>

                        <CardSection style={styles.ImageCardSectionStyle}>
                            <TouchableOpacity>
                                <Image source={require('./../images/menu.jpg')} style={styles.imageStyle}/>
                                <Text style={styles.imageContentStyle}> Your Orders </Text>
                            </TouchableOpacity>
                        </CardSection>

                        <CardSection style={styles.ImageCardSectionStyle}>
                            <Image source={require('./../images/location.jpg')} style={styles.imageStyle}/>
                            <Text style={styles.imageContentStyle}> Location </Text>
                        </CardSection>
                    </Card>

                </ScrollView>
            </View>
        );
    }
}

const styles={
    scrollStyle:{
        flex:-1
    },

    imageStyle:{
        height: '80%',
        width: '100%',
        opacity: 0.8
    },

    imageContentStyle:{
        fontWeight: '600',
        color:'#383838',
        fontSize: 20,
        alignSelf : 'center'
    },
    ImageCardSectionStyle:{
        borderColor: '#fdfdfd',
        borderRadius: 2,
        backgroundColor: '#fff',
        //shadowOpacity: 0.2,
        //shadowOffset:{ width: 0, height: 1},
        //shadowColor: '#c7c7c7',
        flexDirection: 'column',
        margin: 5,
        height: 150,
        width: 113
    },
    ImageCardStyle:{
        borderColor: '#fdfdfd',
        borderRadius: 2,
        flexDirection: 'row',
        borderWidth: 2,
    },
    headerContainerStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'transparent'
    },
    headerStyle:{
        color: '#ffffff',
        fontSize: 40,
        fontWeight: '700',
        paddingTop: 10,
        opacity: 1.0
    }
}
export default MainComp;