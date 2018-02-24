import React,{Component} from 'react';
import {Text,View,Alert,Image,ActivityIndicator} from 'react-native';
import ImageResizer from 'react-native-image-resizer';
import axios from 'axios';

class imgResize extends Component
{
    constructor(props)
    {
        super(props);

        //alert('Hellore')
        this.state={
            path:'/Users/lanet/Desktop/React/foodApp/src/images/menu.jpg',
            loading: false
        }
        console.log(this.state)
    }

    componentWillMount()
    {
        //alert('Path:' + this.state.path)
    }

    async getImagPath()
    {
        var promise=await new Promise((resolve,reject)=>{
                axios.get("http://localhost:3000/upload").then((response)=>{
                    alert("Promise" + response.data)
                    //this.setState(path: response.data,loading:false})
                    resolve(response.data);
                }).catch(err=>alert(err));
        })

        return promise;
    }

    upload(uri)
    {
        const data = new FormData();

        //const photos = [{url:"/Users/lanet/Desktop/React-Native/MyShop/images/slider_1.jpg"}, {url:"/Users/lanet/Desktop/React-Native/MyShop/images/slider_2.jpg"}];

        //photos.forEach((photo) => {

        data.append('sample', {
            //uri: "/Users/lanet/Desktop/React/foodApp/src/images/dessert.jpg",
            uri:uri,
            name: 'test.jpg',
            type: 'multipart/form-data'
        });

        //});

        fetch("http://localhost:3000/upload",{
            method:'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body:data
        }).then(res=>{
            console.log("Upload");
        }).catch(e=>alert(e));
    }

    imgResize()
    {
        let uri='/Users/lanet/Desktop/React/foodApp/src/images/back1.jpg';
        let outpath='/Users/lanet/Desktop/React/foodApp/src/images/compressImg';
        let newWidth=200,newHeight=100;

        ImageResizer.createResizedImage(uri, newWidth,newHeight, 'JPEG', 100,0,outpath).then((uri) => {
            alert('Image: ' + uri.path);
            this.upload(uri.path);
        }).catch((err) => {
            alert('Error: ' + err);
        });
    }

    render()
    {
        //alert("Render: "+ this.state.path);
        if(this.state.loading)
        {
            return <ActivityIndicator size={'small'}/>
        }

        return(
            <View>
                {/*alert(this.state.path)*/}
                <Text> Hello </Text>
                <Image source={{uri:this.state.path}} style={{height:'100%',width:'100%'}}/>
            </View>
        );
    }

    componentDidMount()
    {
        this.setState({loading: true});

        this.getImagPath().then((data)=>{
            this.setState({
                path:data,
                loading: false
            })
        },(err)=>{
            alert("Error: " + err)
        }).catch((err)=>{
            alert("Catch" + err);
        });
    }
}

export default imgResize;