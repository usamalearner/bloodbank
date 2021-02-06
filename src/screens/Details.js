import * as React from 'react';

import { View,Button, ActivityIndicator,StyleSheet,Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

function Details(props){

      let {fname,lname,phoneno,email,gender,weight,location,age,bgroup,country,city} = props.route.params
      // console.log(fname,lname,phoneno,email,gender,weight,location,age,bgroup,country,city)
    let  donate=""
      if(bgroup==='A+'){
            donate = "Can donate red blood cells to A+ and AB+ groups"        
    }
    else if(bgroup==='A-'){
        donate = "Can donate red blood cells to A- and AB- groups"        
}
    
    else  if(bgroup==='B+'){
        donate = "Can donate red blood cells to B+ and AB+ groups"        
}
else if(bgroup==='B-'){
    donate = "Can donate red blood cells to B- and AB- groups"        
} else  if(bgroup==='AB+'){
    donate = "Can donate red blood cells to AB+ groups "        
}
else if(bgroup==='AB-'){
donate = "Can donate red blood cells to AB- group"        
}
else if(bgroup==='O+'){
    donate = "Can donate to all +ve blood groups, Universal Donar "        
}
else if(bgroup==='O-'){
    donate = "Can donate to all -ve blood groups, Universal Donar "        
}
else{
    donate=""

}
    return(
      <ScrollView>
         <Container style={{backgroundColor:'#CF2050',justifyContent:'center',alignItems:'center'}}>
        
        <Content padder>
          <Card style={{backgroundColor:'pink'}}>
            <CardItem style={{backgroundColor:'red'}} header bordered>
              <Text style={{color:'white',fontSize:20}}>Personal & Medical Info</Text>
            </CardItem>
            <CardItem bordered>
              <Body style={{backgroundColor:'pink',padding:9}}>
            
                <Text>First Name : &nbsp;
                  {fname}
                </Text>
                <Text> Last Name : &nbsp;
                  {lname}
                </Text>
                <Text> Email Address : &nbsp;
                  {email}
                </Text>
                <Text> Phone No. : &nbsp;
                  {phoneno}
                </Text>
                <Text> Gender : &nbsp;
                  {gender}
                </Text>
                <Text> Age : &nbsp;
                  {age}
                </Text>
                <Text> Blood Group : &nbsp;
                  {bgroup} 
                </Text> 
                <Text> Weight : &nbsp;
                    {weight}
                </Text>
                <Text>Location : &nbsp;
                  {location}
                </Text>
                <Text> City : &nbsp;
                  {city}
                </Text>
                <Text> Country : &nbsp;
                  {country}
                </Text>
              </Body>
            </CardItem>
            <CardItem  style={{backgroundColor:'pink'}} footer bordered>
              <Text style={{color:'black',fontSize:16}}>{donate}
                  
              </Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
      </ScrollView>
       
    )
}
const styles = StyleSheet.create({
        
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    }
})

export default Details