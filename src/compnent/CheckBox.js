import React,{Component} from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import styles from '../styles/styles'
import NumericUpDown from './NumericUpDown'

class CheckBox extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            toggle:false
        }
    }

    changeState()
    {
        if(this.state.toggle)
        {
            this.setState({toggle:false})
        }
        else
        {
            this.setState({toggle:true})
        }
    }

    renderCheckBox()
    {
        if(this.state.toggle)
        {
            return(
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <View style={styles.checkboxMainView}>
                        <Image source={require('../images/checked.png')} style={styles.chkechboxImageStyle}/>
                    </View>
                    <NumericUpDown/>
                </View>
            )
        }
        else
        {
            return(
                <View style={styles.checkboxMainView}>
                    <View style={styles.chkechboxImageStyle}>
                    </View>
                </View>
            )
        }
    }

    render()
    {
        return(
            <TouchableOpacity onPress={()=>this.changeState()}>
                {
                    this.renderCheckBox()
                }
            </TouchableOpacity>
        )
    }
}

export default CheckBox