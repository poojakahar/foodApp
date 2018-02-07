import React , {Component} from 'react';
import {Text,View,Alert,ActivityIndicator} from 'react-native';
import axios from 'axios';
import Card from "./Card";
import CardSection from "./CardSection";
import MenuComp from './MenuComp'

class Menu extends Component
{
    constructor(props)
    {
        super(props);

        this.state={
            category:[],
            loading: false
        };
    }

    componentDidMount(){

    }

    async componentWillMount()
    {
        console.log(this.state);
        this.setState({loading: true});

        await this.getMenuDtl().then((data)=>{
            //alert(data);
            this.setState({
                category: data,
                loading: false
            });
        });
    }

    async getMenuDtl()
    {
        var promise= await new Promise((resolve,reject)=>{
            axios.get('http:/localhost:3000/category').then((response)=>{
                /* alert(response.data);*/
                resolve(response.data);
            }).catch((err)=>{
                alert('In catch block: ' + err)
                reject();
            });
        });
        return promise;

    }

    renderCategory()
    {
        //return null;
        //alert(this.state.category);

        //return this.state.category.map(cat=><MenuComp name={cat.category_name}/>);
    }

    render()
    {
        if(this.state.loading)
        {
            return <ActivityIndicator size={'small'}/>
        }

        return(
            <View>
                <Card>
                    {
                        this.state.category.map((data)=>{
                                return <CardSection>
                                    <Text>{data.category_name}</Text>
                                </CardSection>
                            }
                        )
                    }
                </Card>
            </View>
        );
    }
}

export default Menu;