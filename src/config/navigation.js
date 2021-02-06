// In AppNav.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';

import Signin from '../screens/signin';
import Signup from '../screens/signup';
import Page from '../screens/page';
import Details from '../screens/Details';
import About from '../screens/about';
import Profile from '../screens/profile';
import { StyleSheet, Text, View, Image } from 'react-native';
// import signUp from '../store/action'
// import store from '../store'


const Stack = createStackNavigator();

function AppNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{
          title:"Blood Bank",
          headerStyle:{backgroundColor:"red"},
            headerTitle:props=> <Text style={{color:'white',fontSize:20,textAlign:'center'}}>Blood Bank</Text>
}} 
      
      name="Home" component={Home} />
        <Stack.Screen  options={{
    headerShown: false
  }} name="Page" component={Page} />
        <Stack.Screen options={{
          headerStyle:{backgroundColor:'red'},
          headerTitle:props=> <Text style={{color:'white',fontSize:20,}}>Sign Up</Text>

        }}  name="Signup" component={Signup} />
        <Stack.Screen  options={{
          headerStyle:{backgroundColor:'red'},
          headerTitle:props=> <Text style={{color:'white',fontSize:20,}}>Sign In</Text>

        }} name="Signin" component={Signin} />
        <Stack.Screen
        options={{
          headerStyle:{backgroundColor:'pink'}
        }} name="Details" component={Details} />
         
            <Stack.Screen
        options={{
          headerStyle:{backgroundColor:'pink'}
        }} name="About" component={About} />
        {/* <Stack.Screen name="action" component={store}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNav;