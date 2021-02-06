
import {connect} from "react-redux";
import * as React from 'react';
import auth from '@react-native-firebase/auth';
import { View,Button, ActivityIndicator,StyleSheet,Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body} from 'native-base';
import database from '@react-native-firebase/database';
function Profile(props){
    const [userr,setUserr] = React.useState(props.user)
    let current = props.current_user
    database()
    .ref('/users/')
    .once('value')
  .then(snapshot => {
    setUserr(snapshot)
  });

    const logout=()=>{
        console.log('hi')
        

auth()
  .signOut()
  .then(() => console.log('User signed out!'));
  props.navigation.navigate('Home')

    }
    // {console.log(userr)}
return(

<View style={{justifyContent:'center',alignItems:'center'}}>
{/* {user.map((v,i)=>{
                            return v.email === current && <View key={v.email}>
                                <Text>
                                    {console.log(v)}
                                </Text>
                            </View>
                              
                        })} */}
                      


        {/* <Container style={{backgroundColor:'#CF2050'}}>
        
        <Content padder>
          <Card style={{backgroundColor:'pink'}}>
            <CardItem style={{backgroundColor:'red'}} header bordered>
              <Text style={{color:'white',fontSize:20}}>Your Profile</Text>
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
            <Button color="red" onPress={logout} title='Log Out'>

            </Button>
            </CardItem>
          </Card>
        </Content>
      </Container> */}
   
</View>
)
}
const mapStateToProps = (state)=>({
 
    current_user:state.current_user,
    // userDetails:state.userDetails,
    users:state.users
   
    
    
   
  })

  
  export default connect(mapStateToProps,null)(Profile);