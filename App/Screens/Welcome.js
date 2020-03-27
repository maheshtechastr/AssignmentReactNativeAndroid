'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {name as appName} from '../../app.json';

export default class HelloWorldApp extends Component {
	
  render() {
	   /* 2. Get the param */
  const { name } = this.props.route.params;
  
    return (
      <View style={styles.container}>
	  
		<View style={styles.sectionTitle}> 
			<Text style={styles.title}>{name.title} </Text> 
		</View>
		
		<View style={styles.sectionBody}> 
			<Text style={styles.bodyText}>Hello, world! </Text>
		</View>
		
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: '#555',
    fontWeight: 'bold',
    fontSize: 24,
	
  },
  bodyText: {
    color: 'gray',
	fontSize:17,
  },
  sectionTitle: {
	padding:10,
	backgroundColor:'#cdcdcd',
	height:80,
	textAlign:'center',
	borderColor:'#999',
	borderWidth:1,
  },
  
  sectionBody: {
	justifyContent: 'center',
	  flex:1,
	  alignItems: 'center',
	  
  },
  container:{
	// Setting up View inside component in Vertically center.
	//justifyContent: 'center',
 
	// Setting up View inside component align horizontally center.
	//alignItems: 'center',
	
	flex:1,
		
  }
});

