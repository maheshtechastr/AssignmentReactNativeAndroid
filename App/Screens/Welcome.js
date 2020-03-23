'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {name as appName} from '../../app.json';

const styles = StyleSheet.create({
  title: {
    color: '#555',
    fontWeight: 'bold',
    fontSize: 24,
	
  },
  bodyText: {
    color: 'gray',
	
  },
  sectionTitle: {
		backgroundColor:'#efefef',
		height:80,
		alignItems: 'center',
		justifyContent: 'center',
  },
  
  sectionBody: {
	justifyContent: 'center',
	  flex:1,
	  alignItems: 'center'
  },
  container:{
	// Setting up View inside component in Vertically center.
	//justifyContent: 'center',
 
	// Setting up View inside component align horizontally center.
	//alignItems: 'center',
	
	flex:1,
		
  }
});



export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.container}>
	  
		<View style={styles.sectionTitle}> 
			<Text style={styles.title}>{appName} </Text> 
		</View>
		
		<View style={styles.sectionBody}> 
			<Text style={styles.bodyText}>Hello, world!</Text>
		</View>
		
      </View>
    );
  }
}