
import * as React from 'react';

const userDetails = [
    {
        name:'usama',
        fname:"ali",
        email:"syed@gmail.com",
        bloodgroup:"B+",
        location:"golimar",
        weight:"50kg"
    },
]

const users = [
    // firebase.database().ref('/').child('users').on('child_added',(data)=>{
    //     users.push(data.val())
    //     console.log("firebase_data=>",users)
    // })
    'usama'
]

export {
    users,
    userDetails
}