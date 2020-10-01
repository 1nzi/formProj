import React from 'react';
import "./style.css"
import { useHistory } from 'react-router-dom';


function Controller(props) {

    const person=props.location.state.obj;
    console.log(person[0].Pname)
   
    
    
    return (
       
      <div>
          <head>
        
          </head>

          <body>
            <h1>Profile</h1>
              <h1>{person[0].Pname}</h1>
              <div class="container">
              <h1 class="heading">Profile</h1>
              <div class="profileContainer">
                <h1>{"Name: "+person[0].Pname}</h1>
                <p>{"Email: "+person[0].email}</p>
                <p>{"Address: "+person[0].address}</p>
                <p>{"Gender: "+person[0].gender}</p>
                <p>{"Mobile NO : "+person[0].mobileNo}</p>
              </div>
             

              <div class="otherInfo">
                 <div class="info">
                    <h1>{person[0].Mname}</h1>
                     <p>{"Roll No: "+person[0].MrollNo}</p>
                     <p>{"Obtained Marks: "+person[0].MobtainedMarks}</p>
                     <p>{"Passing Year "+person[0].Myear}</p>

                 </div>

                 <div class="info">
                    <h1>{person[0].Iname}</h1>
                     <p>{"Roll No: "+person[0].IrollNo}</p>
                     <p>{"Obtained Marks: "+person[0].IobtainedMarks}</p>
                     <p>{"Passing Year "+person[0].Iyear}</p>

                 </div>


                 <div class="info">
                    <h1>{person[0].Uname}</h1>
                     <p>{"Programe: "+person[0].programe}</p>
                     <p>{"Cgpa: "+person[0].cgpa}</p>

                 </div>
              </div>
              </div>

          </body>
      </div>
      
    );
}

export default Controller;