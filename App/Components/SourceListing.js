'use strict';
import React from "react";
import {
StyleSheet,
View,
ActivityIndicator,
FlatList,
Image,
Text,
TouchableOpacity,
Alert
} from "react-native";

import * as constants from './AppConstants';
import AsyncImage from './AsyncImage';


export default class TodosList extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {		 
			loading: true,
			dataSource:[],
		};
	}
	
	static navigationOptions = ({ navigation }) => {
		return {
		  title: "Todo List",
		  headerStyle: {backgroundColor: "#fff"},
		  headerTitleAlign: 'center'
		};
	};
	 
	componentDidMount(){
		//console.log(constants.BASE_URL+"/todos")
		this.getData();
	}

	FlatListItemSeparator = () => {
		return (
		  <View style={{
			 height: 1,
			 width:"100%",
			 backgroundColor:"rgba(0,0,0,0.5)",
			}}
			/>
		);
	}

	getListViewItem = (item) => {  
		this.props.navigation.navigate("Welcome", {name: item})
	}  
		
	renderItem=(data)=>		
		<TouchableOpacity style={styles.list} 
		 onPress={this.getListViewItem.bind(this, data.item)}>
			<View style={{flexDirection:'row'}}>
				<Image style={{width:50,height:50, marginRight:10, borderRadius:50,
					backgroundColor:'#ccc'}}>
				</Image>		
				<View style={{justifyContent:'center'}}>			
					<Text style={styles.lightText}>Title: {data.item.title}</Text>
					<Text style={styles.lightText}>Status: {data.item.completed?"completed":"Not completed"}</Text>	  
				</View>
			</View>
		</TouchableOpacity>
		

	render(){
		if(this.state.loading){
			return( 
			<View style={styles.loader}> 
			
			<ActivityIndicator size="large" color="#0c9"/>
			</View>
		)} else	if(this.state.dataSource == null){
			return( 
			<View style={styles.loader}> 
			
			<Text style={{paddingVertical: 4, fontSize:20,fontWeight: "bold"}}>
			Something went wrong</Text>
			<Text style={{paddingVertical: 4, fontSize:15, color:'#999'}}>Give it another try </Text>
			<TouchableOpacity style={styles.list} 
			 onPress={this.getData}>
			<Text style={{fontSize:16, color:'#00ccff', fontWeight: "bold"}}>RELOAD</Text>
			
			</TouchableOpacity >
			</View>
		)}
		return(
			<View style={styles.container}>
			<FlatList
			data= {this.state.dataSource}
			removeClippedSubviews={true}
			ItemSeparatorComponent = {this.FlatListItemSeparator}
			renderItem= {item=> this.renderItem(item)}
			keyExtractor= {item=>item.id.toString()}
			/>
			</View>
		)
	}
	
	getData = () => {
		this.setState({loading: true});
		console.log('GetData Called');
		fetch(constants.BASE_URL+"/todos")
			.then(response => response.json())
			.then((responseJson)=> {
			  this.setState({
			   loading: false,
			   dataSource: responseJson
			  })
			})
			.catch(error=>{
				console.log(error)
				this.setState({loading: false,
				dataSource: null})			
			}); //to catch the errors if any
	}
}

//**********Stylesheet*******

const styles = StyleSheet.create({
  container: {
    flex: 1,
	padding:15,
    backgroundColor: "#fff"
   },
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
   },
  list:{
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#fff"
   }
});