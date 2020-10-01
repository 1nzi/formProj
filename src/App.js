import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import FormVal from './Screens/FormVal'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Controller from './Profile/Controller';
import firebase from "./firebase"
import CompleteInfo from './AllProfileInfo/CompleteInfo';
import ViewCards from './CardFolder/ViewCards';


function App() {
  return (
    <Router>
    <div className="App">
      
      <Switch>
        <Route path="/" exact component={FormVal}></Route>
        <Route path="/controller" component={Controller}></Route>
        <Route path="/completeinfo"  component={CompleteInfo}></Route>
        <Route path="/cardinfo"  component={ViewCards}></Route>


      </Switch>

    </div>
    </Router>
  );
  
}

export default App;
