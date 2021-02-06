
import database from '@react-native-firebase/database';


 

export default function get_users(){
    return (dispatch)=>{
        let users = []
       database().ref('users').on('child_added',(data)=>{
            users.push(data.val())
            // console.log("firebase_data=>",users)
            dispatch({type:"SETFIREBASEUSERS",payload:users})
        })
        
    }
}


 
  

function signUp(data, props) {
    return (dispatch) => {
     
                // dispatch({type :"SETUSER",payload: data})

               
        dispatch({ type: "SETUSER", payload: data });
    };

}



export {
    // get_users,
 
    signUp,
 
  
}