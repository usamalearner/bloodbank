import * as React from 'react';
import auth from '@react-native-firebase/auth';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { Button } from 'react-native';
import { useState } from 'react';
function Signin(props){
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')
const handleClick=()=>{
  let user ={
    email,
    password,
  }
  
  auth()
  .signInWithEmailAndPassword(user.email, user.password)
  .then(() => {
    alert('signed in!');
    props.navigation.navigate('Page',user.email)
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
     alert('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      alert('That email address is invalid!');
    }

    alert(error);
  });
}


    return(
      // <View>
      
         <Container style={{backgroundColor:"pink"}}>
       
      <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input value={email}  onChangeText={(e)=>setEmail(e)}/>
            </Item>
            
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry={true} value={password}  onChangeText={(e)=>setPassword(e)} />
            </Item>
          </Form>
        </Content> 
        <Button color="red" onPress={()=>handleClick()} title="Signin"></Button>
    
       </Container> 
      // </View>
        
    )
}

export default Signin;