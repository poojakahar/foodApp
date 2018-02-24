//--------------------------------- NewMenu.js ---------------------
/*async componentWillMount()
    {
        console.log(this.state);
        this.setState({loading: true});

        await this.getMenuDtl().then((data)=>{
            //alert(data);
            this.setState({
                category: data,
                loading: false,
                //path:data[data.length-1].path
            });
        });
    }

    async getMenuDtl()
    {
        var promise= await new Promise((resolve,reject)=>{
            axios.get('http:/localhost:3000/category').then((response)=>{
                /!* alert(response.data);*!/
                resolve(response.data);
            }).catch((err)=>{
                alert('In catch block: ' + err)
                reject();
            });
        });
        return promise;

    }*/

/*if(this.state.loading)
        {
            return <ActivityIndicator size={'large'}/>
        }

        return(
            <ScrollView style={style.viewStyle}>
                <Card style={style.cardStyle}>
                    {
                        this.state.category.map((data,key)=>{
                                return <TouchableOpacity onPress={()=>this.props.navigation.navigate('SubMenu',{data})} key={data.category_name}>
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
        );*/