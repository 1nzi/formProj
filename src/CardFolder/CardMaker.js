import React from 'react';
import "./style.css";
import { useHistory } from 'react-router-dom';

function CardMaker({Parray}) {

    console.log("inn card generator", Parray.Pname);
    const history=useHistory()

    function clickHandler(){

        history.push({ 
            pathname: '/controller',
            state:{
              obj:[Parray]
            }
           });
    }
    return (
        <div>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
        </head>

          <div class="card">
         <div class="container">
        <h4><b>{Parray.Pname}</b></h4> 
            <p>{Parray.email}</p> 
            <p>{Parray.address}</p> 
            <p>{Parray.mobileNo}</p> 
            <p>{Parray.gender}</p> 
            <p><button class="w3-button w3-green" onClick={clickHandler}>Back to Profile</button></p> 
        </div>
        </div>
  
        </div>
    );
}

export default CardMaker;