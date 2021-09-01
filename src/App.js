import React,{useState} from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

//react-router

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import PageNotFound from "./Pages/PageNotFound";
import { UserContext } from "./Context/UserContext";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import firebaseConfig from "./Config/firebaseConfig";
//init commit
firebase.initializeApp(firebaseConfig)

const App = ()=>
{
  const[user,setUser]=useState(null);
  return(
   <Router>
     <ToastContainer/>
     <UserContext.Provider value={{user,setUser}}>
      <Header/>
      <Switch>
        <Route
          exact path="/" component={Home}/>
        <Route
          exact path="/signin" component={Signin}/>
          <Route
          exact path="/signup" component={Signup}/>
          <Route
          exact path="*" component={PageNotFound}/>
      </Switch>
      <Footer/>
     </UserContext.Provider>
   </Router>
  )
}


export default App;
