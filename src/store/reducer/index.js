

const INITIAL_STATE = {
    users: [],
    // users:[ {
    //     fname:'usama',
    //     lname:'ayaz',
    //     age : '50',
    //     location :'nazimabad',
    //     bgroup :'A+',
    //     weight:'50kg',
    //     phoneno : '033788',
    //     email :'syed@gmail.com',
    //     country:"Pakistan",
    //     gender:'male',
    //     city:'karachi'
    //   },
    //   {
    //     fname:'usama',
    //     lname:'ayaz',
    //     age : '45',
    //     location :'nazimabad',
    //     bgroup :'O+',
    //     weight:'50kg',
    //     phoneno : '0300288',
    //     email :'syed@gmccai.com',
    //     country:"Pakistan",
    //     gender:'male',
    //     city:'karachi'
    //   },
    //   {
    //     fname:'usama',
    //     lname:'ayaz',
    //     age : '45',
    //     location :'nazimabad',
    //     bgroup :'O+',
    //     weight:'50kg',
    //     phoneno : '0300788',
    //     email :'syed@gdxmai.com',
    //     country:"Pakistan",
    //     gender:'male',
    //     city:'karachi'
    //   },
    //   {
    //     fname:'usama',
    //     lname:'ayaz',
    //     age : '45',
    //     location :'nazimabad',
    //     bgroup :'O+',
    //     weight:'50kg',
    //     phoneno : '03008',
    //     email :'syed@gmersai.com',
    //     country:"Pakistan",
    //     gender:'male',
    //     city:'karachi'
    //   },
    //   {
    //     fname:'usama',
    //     lname:'ayaz',
    //     age : '45',
    //     location :'nazimabad',
    //     bgroup :'O+',
    //     weight:'50kg',
    //     phoneno : '0300',
    //     email :'syed@gffmai.com',
    //     country:"Pakistan",
    //     gender:'male',
    //     city:'karachi'
    //   },
    //   {
    //     fname:'usama',
    //     lname:'ayaz',
    //     age : '45',
    //     location :'nazimabad',
    //     bgroup :'O+',
    //     weight:'50kg',
    //     phoneno : '03002588',
    //     email :'syed@gmesai.com',
    //     country:"Pakistan",
    //     gender:'male',
    //     city:'karachi'
    //   },
    //   {
    //     fname:'ama',
    //     lname:'aya',
    //     age : '45',
    //     location :'nazimabad',
    //     bgroup :'AB+',
    //     weight:'50kg',
    //     phoneno : '030788',
    //     email :'syed@gmal.com',
    //     country:"Pakistan",
    //     gender:'male',
    //     city:'karachi',
    //   },
    //   {
    //     fname:'usma',
    //     lname:'aaz',
    //     age : '45',
    //     location :'nazimabad',
    //     bgroup :'A+',
    //     weight:'50kg',
    //     phoneno : '03008',
    //     email :'syd@gmail.com',
    //     country:"Pakistan",
    //     gender:'male',
    //     city:'karachi'
    //   },
    //   {
    //     fname:'usma',
    //     lname:'aaz',
    //     age : '45',
    //     location :'nazimabad',
    //     bgroup :'B+',
    //     weight:'50kg',
    //     phoneno : '88',
    //     email :'sy@gmail.com',
    //     country:"Pakistan",
    //     gender:'male',
    //     city:'karachi'
    //   },
    //   {
    //     fname:'usma',
    //     lname:'aaz',
    //     age : '45',
    //     location :'nazimabad',
    //     bgroup :'O+',
    //     weight:'50kg',
    //     phoneno : '0303788',
    //     email :'sy@gmacccccil.com',
    //     country:"Pakistan",
    //     gender:'male',
    //     city:'karachi'
    //   }],
    current_user : 
   [ {
      // fname:'usama',
      //   lname:'ayaz',
      //   age : '45',
      //   location :'nazimabad',
      //   bgroup :'O+',
      //   weight:'50kg',
      //   phoneno : '03002553788',
      //   email :'syed@gffmai.com',
      //   country:"Pakistan",
      //   gender:'male',
      //   city:'karachi'
    }]
    ,
    userDetails :[{
        fname:'ua',
        lname:'az',
        age : '45',
        location :'nazbad',
        bgroup :'B+',
        weight:'50kg',
        phoneno : '030025',
        email :'syed@gmabil.com',
        country:"Pakistan",
        gender:'male'
    }]
}

export default (state = INITIAL_STATE,action)=>{
   
    switch (action.type){
      case "SETUSER":
          return({
              ...state,
              current_user:action.payload
          })

          case "SETFIREBASEUSERS":
          return({
              ...state,
              users:action.payload
          })
  }
    return state;

}