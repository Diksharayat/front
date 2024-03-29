import axios from "axios";
import { createContext, useReducer } from "react";
import { LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS } from "./authActionTypes";

export const authContext=createContext();
const INITIAL_STATE={

  // we want to keep track of the authentication status of the user 

  userAuth: JSON.parse(localStorage.getItem("userAuth")),
  error:null,

  // i also want to keep track of the loading status so that
  // i can give user a good user experience 

  loading:false,
  profile:null,
  };

  //Auth Reducer

  const reducer= (state,action)=>{
    // console.log(action);
    const {type, payload}=action;
  // we are going to check the action type which is coming in  into this reducer 
  switch (type) {

    //register
    case REGISTER_SUCCESS:
      //Add user to localstorage
     
      return {
        ...state,
        loading: false,
        error: null,
        userAuth: payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
        userAuth: null,
      };

    case LOGIN_SUCCESS:
      //Add user to localstorage
      localStorage.setItem("userAuth", JSON.stringify(payload));
      return {
        ...state,
        loading: false,
        error: null,
        userAuth: payload,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: payload,
        loading: false,
        userAuth: null,
      };

      
        //logout
        case LOGOUT:
          //remove user from local storage
         localStorage.removeItem('userAuth')
        return{
          ...state,
          loading:false,
          error:null,
         userAuth:null

        };
      default:
        return state;
  }
}




//provider
// next we will create a provider which is going to serve us the high order function
// it is going to take a component that is going to take a data from this context

const AuthContextProvider=({children})=>{

// next is we want to find a way to update these states to achieve that we are going to use a hook called use useReducer
//  you should must call the useReducer inside the provider, might be inside the component 
// we call useReducer as a function and for this it will take a two arguments first is call back function and initial state
//here we also destructure the usereducer.
//to send data from backend to frontend we use useReducer. we are going to write our business logic inside the useReducer function so we make function and call inside our useReducer.

const [state,dispatch]= useReducer(reducer,INITIAL_STATE);

// here state represent the entire state in out initial state.
// next is the dispatch function which means we are going to update the initial state.
//your can name these two by your choice anything you want.
//login action
// since we need to talk to the database or server we use async 
const loginUserAction=async(formData)=>{
  const config={
    headers:{
      //this tels we are sending a data which is of type json 
     "Content-Type": "application/json",
    },
  };

  try {
  
  // here to get date we can use fetch or Axios
  //we will user axios. we make request to backend  
  //here it take three arguments url link,payload, 
  // header:it gives more details about the request and we can also send some payload for ex:- token 
  const res=await axios.post( 
      `http://localhost:3001/api/v2/users/login`,
    formData,
    config
    );
  if (res?.data?.status ==='success') {
    dispatch({
      type: LOGIN_SUCCESS,
      payload:res.data
    });
  }
  console.log(res);

alert("login successful");
  //Redirect
  // window.location.href="/dashboard";
} catch (error) {
  dispatch({
    type:LOGIN_FAILED,
    payload:error?.responce?.data?.message,
  })
  console.log(error);
}
};


//register action
// since we need to talk to the database or server we use async 
const registerUserAction=async(formData)=>{
  const config={
    headers:{
      //this tels we are sending a data which is of type json 
     "Content-Type": "application/json",
    },
  };

  try {
  
  // here to get date we can use fetch or Axios
  //we will user axios. we make request to backend  
  //here it take three arguments url link,payload, 
  // header:it gives more details about the request and we can also send some payload for ex:- token 
  const res=await axios.post( 
      `http://localhost:3001/api/v2/users/register`,
    formData,
    config
    );
  if (res?.data?.status ==='success') {
    dispatch({
      type: REGISTER_SUCCESS,
      payload:res.data
    });
  }
  console.log(res);

alert(" user Registered");
window.location.href="/login";
  //Redirect
  // window.location.href="/dashboard";
} catch (error) {
  dispatch({
    type:REGISTER_FAIL,
    payload:error?.responce?.data?.message,
  })
  console.log(error);
}
};


//Logout
const logoutUserAction = () => {
  dispatch({
    type: LOGOUT,
    payload: null,
  });
  //Redirect
  window.location.href = "/login";
};

return (

// it is going to provide data to other component
//  here we are going a component that is going to have access to this provider in that way we are going pass a prop called value.
 
 <authContext.Provider value={{
    
    loginUserAction,
    userAuth:state,
    token:state?.userAuth?.token,
    registerUserAction,
    error:state?.error,
    logoutUserAction

  }}>{children}</authContext.Provider>
)
}

export default AuthContextProvider;