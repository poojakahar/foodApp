import React,{Component} from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import styles from '../styles/styles'

class NumericUpDown extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            cnt:1
        }
    }

    changeQty()
    {
        this.setState({cnt:this.state.cnt+1});
    }

    changeMinusQty()
    {
        this.setState({cnt:this.state.cnt-1});
    }

    render()
    {
        return(
            <View style={styles.numericUpDownMainViewStyle}>
                <Text> {this.state.cnt} </Text>
                <View style={styles.numericUpDownImageMainViewStyle}>
                    <View style={[styles.numericUpDownImageContainerStyle,styles.numericUpDownUpImageContainerStyle]}>
                        <TouchableOpacity onPress={()=>this.changeQty()}>
                            <Image source={require('../images/uparrow.png')} style={styles.numericUpdownImageStyle}/>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.numericUpDownImageContainerStyle,styles.numericUpDownDownImageContainerStyle]}>
                        <TouchableOpacity onPress={()=>this.changeMinusQty()}>
                            <Image source={require('../images/downarrow.png')} style={styles.numericUpdownImageStyle}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default NumericUpDown