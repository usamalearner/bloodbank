
import * as React from 'react';

import { View, Text,Button, ImageBackground ,Linking} from 'react-native';



function Home(props) {

    return (
          <ImageBackground
          
      style={{width:'100%',height:'100%',backgroundColor:'white'}}
      source={require('../assets/home.jpg')}
      resizeMode='contain'
      >
        <View >
        <Text style={{marginLeft:25,marginBottom:10,marginTop:20}} >
        <Button color="#C70039"  titleStyle={{
       color: "white",
       fontSize: 30,
       padding:20,
       
   }} onPress={()=>props.navigation.navigate('Signup')} title="&nbsp;Sign up &nbsp;"></Button>
        </Text>
        <Text style={{marginLeft:25,marginBottom:10,marginTop:10}}>
        <Button color="#C70039"  titleStyle={{
       color: "white",
       fontSize: 30,
       padding:20,
       
   }} onPress={()=>props.navigation.navigate('Signin')} title="&nbsp;Sign in  &nbsp;"></Button>
       
        </Text>
        <Text style={{marginLeft:25,marginBottom:10,marginTop:10}}>
        <Button color="#C70039"  titleStyle={{
       color: "white",
       fontSize: 30,
       padding:20,
       
   }} onPress={()=>Linking.openURL('https://iusama.web.app') }  title="&nbsp;Developer  &nbsp;"></Button>

        </Text>
       
      </View>
      </ImageBackground> 
      
    );
  }

  
export default Home;