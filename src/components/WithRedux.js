import React, { Component } from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import {url} from '../constants/strings';
import {Styles} from '../assets/HomeStyles';
import DataList from './DataList';
import SpinView from '../common/SpinView';
import {updateDataAction} from '../constants/strings';
import {bindActionCreators} from 'redux';
import { ScrollView } from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import HeaderBar from './Header'
class WithRedux extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search:'',
            isLoading:true,
            data:[]
        }
    }

    componentDidMount(){
        this.fetchServerUrl();
    }

    updateSearch = (search) => {
        this.setState({ search });
    };

    fetchServerUrl(){
        const {data} = this.props;
    
        if(data){

            console.log('data',data)
            this.setState({
                data,
                isLoading:false
            });
            // Don't fetch from the server
            return;
        }
    
        fetch(url,{
          method:'GET',
        })
        .then(response=>{
            return response.json();
        })
        .then((contents)=>{
            this.setState({
                data:contents,
                isLoading:false
            });
            this.props.updateDataAction({data:contents})
        })
        .catch((err)=>{
         
          setTimeout(()=>{
            this.fetchServerUrl();
          },1000)
        })
    }

    render() {
        const {isLoading,data} =this.state;

        if (isLoading) {
            return <SpinView />;
        }

        return (  
            <View>
                <HeaderBar 
                navigation={this.props.navigation}
                title="Redux Data"
                icon="home"
                />
              
                <ScrollView>
                    {data.map((value,index)=>(
                        <DataList navigation={this.props.navigation} key={index} item ={value}/>
                    ))}
                </ScrollView>
                 
            </View>
          
        )
    }
}

function mapStateToProps(state){
    return{
        data:state.data
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        updateDataAction
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(WithRedux);