import React from "react";
import {
StyleSheet,
View,
ActivityIndicator,
FlatList,
Text,
TouchableOpacity,
Alert
} from "react-native";

//import * as constants from 'Components/AppConstants';
import * as constants from './AppConstants';
import AsyncImage from './AsyncImage'

export default class TodosList extends React.Component {
	
	constructor(props) {
	 super(props);
	 this.state = {
	   loading: true,
	   dataSource:[]
	  };
	}
	
	static navigationOptions = ({ navigation }) => {
		return {
		  title: "Todos Listing",
		  headerStyle: {backgroundColor: "#fff"},
		  headerTitleStyle: {textAlign: "center",flex: 1}
		};
	};

	
	 
	componentDidMount(){
		const { userName } = this.props.route.params;
		fetch("http://jsonplaceholder.typicode.com/todos?userid="+userName)
		.then(response => response.json())
		.then((responseJson)=> {
		  this.setState({
		   loading: false,
		   dataSource: responseJson
		  })
		})
		.catch(error=>console.log(error)) //to catch the errors if any
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
	 onPress={this.getListViewItem.bind(this, data.item)}
	>
	<Text style={styles.lightText}>Id: {data.item.id}</Text>
	<Text style={styles.lightText}
	>
	Title: {data.item.title}</Text>
	<Text style={styles.lightText}>Status: {data.item.completed?"completed":"Not completed"}</Text>
	

	  
	</TouchableOpacity>


	render(){
		if(this.state.loading){
			return( 
			<View style={styles.loader}> 
			
			<ActivityIndicator size="large" color="#0c9"/>
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
	)}
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