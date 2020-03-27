'use strict';
import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
	TouchableHighlight,
	Image,
	Alert,
	ActivityIndicator,
	StyleSheet,
	
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AsyncStorage from '@react-native-community/async-storage';

class Login extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			username: '',
			password: '',
			isLoading: false,
			isLoggedIn: false,
			errorMessage :'',
		  }
	}
  

  render() {
    return (
      <ScrollView style={styles.myContainer}>
		<View>
			<Text style={styles.errorMsg}>
				{this.state.errorMessage}
			</Text>
		</View>
		
        <TextInput style={styles.inputText}
			placeholder="UserName"
			keyboardType="email-address"
			value={this.state.username}
			onChangeText={value => this.setState({username:value})}
			onSubmitEditing={this._submitForm}
        />

        <TextInput
			style={styles.inputText}
			placeholder="Password"
			secureTextEntry={true}
            value={this.state.password}
			onChangeText={value => this.setState({password:value})}
			onSubmitEditing={this._submitForm}
        />
		<View style={styles.blankView20}/>
		
        <TouchableHighlight 
			onPress={this._submitForm}>
			<View style={styles.loginBtn}>
				<Text style={styles.text22}
					onPress={this._submitForm}
					title='Login'>
					Login
				</Text>
			</View>
        </TouchableHighlight>
		
		{this.state.isLoading && (
			<ActivityIndicator
				style={styles.loader}
				size="large"
			/>
		)}
			
      </ScrollView>
    )
  }
  
//Submit for Authentication
  _submitForm = () => {
	  
    const { username, password } = this.state
		
	if(username && password){
		this.setState({isLoading:true})
		setTimeout(() => {
			if(username != "test"){
				this.setState({isLoggedIn:false})
				this.setState({errorMessage: "Please enter a valid username 'test' "})
			}
			else if(password != 'test123') {
				this.setState({isLoggedIn:false})
				this.setState({errorMessage: "Please enter a valid password 'test123' "})
			} else {
				 
				this.setState({errorMessage: ''})
				this.setState({isLoggedIn:true})
				//this.setState({username:'',password:''})
				this.props.navigation.navigate('TodoList', {username: username})	
			}
			this.setState({isLoading:false})
		}, 1000);
	} else {
		Alert.alert('Login Error', "Please fill username and password ")
	}
  };
}


//----
const styles = StyleSheet.create({
	inputText:{
		fontSize:20,
		backgroundColor:'#efe',
		marginTop:15,
		marginBottom:10,
		color:'#666',
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 5,
		paddingLeft:10,
		paddingRight:10,
	},
	loginBtn:{
		borderRadius: 5,
		fontSize:22,	
		color:'#eee',
		padding:7,
		backgroundColor:'#00b5ec',
		textAlignVertical: "center",
				
	},
	myContainer:{
		padding:20,
		flex:1,
		
		backgroundColor:'#eff',
	},
	errorMsg:{
		fontSize:22,
		color:'red'
	},
	text22:{
		fontSize:22,
		color:'#fff',
		textAlign: 'center', 
		textAlignVertical: "center",
	},
	blankView20:{
		height:30
	},
	loader:{
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff"
   },
});


export default Login