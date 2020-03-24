
import 	LoginScreen from './Screens/Login';
import 	WelcomeScreen from './Screens/Welcome';
import 	TodoList from './Components/SourceListing';

import {name as appName} from '../app.json';

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function AppNavigator() {
	
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}
			options={{ title: 'Login Page' }}
			/>
		<Stack.Screen name="Welcome" component={WelcomeScreen} />
		<Stack.Screen name="TodoList" component={TodoList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;