import React, {useState,useEffect} from "react";
import { useHistory } from 'react-router-dom';
import Controller from "../Profile/Controller";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import firebase from '../firebase';


function FormVal(props) {

  var fromEdit=[];
  if(props.location.state){

  const fromEdit=props.location.state.obj;
  console.log(fromEdit[0]);
  }

  const NAMEERROR = "*Invalid Input";
  const EMPTYSTRERROR = "*Invalid Format";
  const PHONEERROR = "*Invalid Phone Number";
  const STRINGERROR = "*Can't Enter Character";
  const CGPAERROR = "*CGPA must be within 0-4";
  const LENGTHERROR = "*Length exceeds max character";
  const MOBILEERROR = "*Must be 11 digit";

  // var personprop={};
  // var metricprop={};
  // var interprop={};
  // var uniprop={};
  
  // if (props.location.state) {
  //  personprop=props.location.state.obj[0];
  //  metricprop=props.location.state.obj[1];
  //  interprop=props.location.state.obj[2];
  //  uniprop=props.location.state.obj[3];

  // }


  var flag =true;
  

  function lengthValidation(val,attr) {
    if (val == "") {
      document.getElementById(
        attr + "Validation"
      ).innerHTML = EMPTYSTRERROR;
      flag=false;
      
      return;
    }
    if(val.length>15)
    {
      document.getElementById(
        attr + "Validation"
      ).innerHTML = LENGTHERROR;
      flag=false;
     
      return;

    }
    document.getElementById(
      attr + "Validation"
    ).innerHTML = "";
   
      flag=true;
  }

  function stringValidation(val,attr) {
    if (!/^.*?[0-9]$/.test(val)) {
      document.getElementById(
        attr + "Validation"
      ).innerHTML = STRINGERROR;
      flag=false;
      return; 
    }

    document.getElementById(
      attr + "Validation"
    ).innerHTML = "";
   
      flag=true;
  }

  function nameValidation(val,attr) {
    

    if (
      parseInt(val[0]) >= 1 ||
      parseInt(val[0]) <= 9
    ) {
      document.getElementById(
        attr+ "Validation"
      ).innerHTML = NAMEERROR;
      flag=false;
    
      return;
    }
    document.getElementById(
      attr+ "Validation"
    ).innerHTML = "";
      flag=true;
    
  }
  function MobileValidation(val,attr) {

   
    
    if (val[0] !== "0") {
      document.getElementById(
        attr+ "Validation"
      ).innerHTML = PHONEERROR;
      flag=false;
 
      return;
    }

    if (!/^.*?[0-9]$/.test(val)) {
      document.getElementById(
        attr+ "Validation"
      ).innerHTML = STRINGERROR;
      flag=false;
      return; 
    }
    if(val.length!= 12)
    {
      document.getElementById(
        attr + "Validation"
      ).innerHTML = MOBILEERROR;
      flag=false;

      return;

    }

    document.getElementById(
      attr+ "Validation"
    ).innerHTML = "";

      flag=true;
  }

  function cgpaValidation(val,attr){
    
   
    if (val> 4 || val<0) {
      document.getElementById(
        attr+ "Validation"
      ).innerHTML = CGPAERROR;
      flag=false;
  
      return; 

    }
    if (!/^.*?[0-9]$/.test(val)) {
      document.getElementById(
        attr+ "Validation"
      ).innerHTML = STRINGERROR;
      flag=false;
   
      return; 
    }

    if (val.length==0) {
      document.getElementById(
        attr+ "Validation"
      ).innerHTML = EMPTYSTRERROR;
     
      flag=false;
      return; 
      
    }
    document.getElementById(
      attr+ "Validation"
    ).innerHTML = "";
    flag=true;

  }

  var [person,setPerson]= useState({

    Pname:"",
    email:"",
    address:"",
    date:"",
    gender:"Male",
    mobileNo:""
  });

  var [metric,setMetric]= useState({

    Mname:"",
    MrollNo:"",
    MobtainedMarks:"",
    Myear:""
  });

  var [inter,setInter]= useState({

    Iname:"",
    IrollNo:"",
    IobtainedMarks:"",
    Iyear:""
  });

  var [uni,setUni]= useState({

    Uname:"",
    programe:"BSSE",
    cgpa:"",
    
  });
    

  function handleName(val,attr){
    nameValidation(val,attr);
    lengthValidation(val,attr);
    setPerson({...person, [attr] :val});
    console.log("in Handle Pname " ,person.Pname)
  }
  function handleuseEffect(val,attr){
    
    setPerson({...person});
   
  }

  // useEffect(() => {
   

  //  //console.log("UE1 props :", personprop.Pname, "Person :",person.Pname)
  //         //setPerson({...person,"Pname":personprop.Pname});
  //         if (props.location.state.obj) {

  //       person.Pname=fromEdit[0].Pname;
  //       person.email=fromEdit[0].email;
  //        person.address=fromEdit[0].address;
  //        person.date=fromEdit[0].date;
  //        person.gender=fromEdit[0].gender;
  //        person.mobileNo=fromEdit[0].mobileNo;

  //        metric.Mname=fromEdit[0].Mname;
  //        metric.MrollNo=fromEdit[0].MrollNo;
  //        metric.MobtainedMarks=fromEdit[0].MobtainedMarks;
  //        metric.Myear=fromEdit[0].Myear;

  //        inter.Iname=fromEdit[0].Iname;
  //        inter.IrollNo=fromEdit[0].IrollNo;
  //        inter.IobtainedMarks=fromEdit[0].IobtainedMarks;
  //        inter.Iyear=fromEdit[0].Iyear;

  //        uni.Uname=fromEdit[0].Uname;
  //        uni.programe=fromEdit[0].programe;
  //        uni.cgpa=fromEdit[0].cgpa;
  //        if(fromEdit[0].Pname != ''){
  //         setPerson({...person}); 
  //         console.log("in func")      
  //      }
  //         }
          
         
        
  //        // console.log("UE2 props :", fromEdit[0].Pname, "Person :",person.Pname)


  //  // console.log("UE3 props :", fromEdit[0].Pname, "Person :",person.Pname)

   
  // },[])

  function mHandleName(val,attr){
    nameValidation(val,attr);
    lengthValidation(val,attr);
    setMetric({...metric, [attr] :val});
  
  }
  function mStringHandler(val,attr){

    stringValidation(val,attr)
    setMetric({...metric, [attr] :val});
  }

  function mYearHandler(val,attr){

    stringValidation(val,attr);
   
    setMetric({...metric, [attr] :val});

  }


  ////
  function iHandleName(val,attr){
    
    nameValidation(val,attr);
    lengthValidation(val,attr);
    setInter({...inter, [attr] :val});
  
  }
  function iStringHandler(val,attr){

    stringValidation(val,attr)
    setInter({...inter, [attr] :val});
  }

  function iYearHandler(val,attr){

    stringValidation(val,attr);
   
    setInter({...inter, [attr] :val});

  }
///////
function uHandleName(val,attr){
  nameValidation(val,attr);
  lengthValidation(val,attr);
  setUni({...uni, [attr] :val});

}

function uHandlecgpa(val,attr){

  cgpaValidation(val,attr);
  setUni({...uni, [attr] :val});

}


  function handleLength(val,attr){
   
    lengthValidation(val,attr);
    setPerson({...person, [attr] :val});

  }

  function handleMobile(val,attr){
    
    MobileValidation(val,attr);
    setPerson({...person, [attr] :val});

  }
  const history=useHistory()

  const obj=
    {
      Pname:person.Pname,
      email:person.email,
      address:person.address,
      date:person.date,
      gender:person.gender,
      mobileNo:person.mobileNo,

      Mname:metric.Mname,
      MrollNo:metric.MrollNo,
      MobtainedMarks:metric.MobtainedMarks,
      Myear:metric.Myear,

      Iname:inter.Iname,
       IrollNo:inter.IrollNo,
       IobtainedMarks:inter.IobtainedMarks,
       Iyear:inter.Iyear,

        Uname:uni.Uname,
         programe:uni.programe,
         cgpa:uni.cgpa
    };

  function submitHandler(event){
    event.preventDefault();
    const formRef=firebase.database().ref('FormData');
    
    formRef.push(obj);

    
    // if (flag) {
    //   history.push({ 
    //     pathname: '/controller',
    //     state:{
    //       obj:[person,metric,inter,uni]
    //     }
    //    });
    // }
      
  
    
  }
  function formButtonListener(){

    history.push({ 
      pathname: '/controller',
      state:{
        obj
      }
     });

  }

  function crudButtonListener(){

    history.push({ 
      pathname: '/completeinfo',
     });
    
  }

  function cardButtonListener(){
    history.push({ 
      pathname: '/cardinfo',
      
     });
  }

 
  return (
    <div>
      <head>
        <title>Bootstrap Example</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="./style.css"></link>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      
      
      </head>

      <body>
        <div class="container" id="container">

          <div class="navbar">
          <div class="navElement">
          
          <div class="form-group">
                <div class="row-sm-offset-5 row-sm-2">
                  <button
                    class="btn btn-primary"
                    id="formButton"
                    onClick={formButtonListener}
                  >Form</button> 

                  <button
                    class="btn btn-primary"
                    id="formButton"
                    onClick={crudButtonListener}
                  >Table CRUD Operations</button> 
                  <button
                    class="btn btn-primary"
                    id="formButton"
                    onClick={cardButtonListener}
                  >Card Layout View</button> 
                  
            
                </div>
          </div>
          </div>
           </div>
            <div class="title">
            <h2 class="text-success">Person Information</h2>
          </div>

          <form class="form-horizontal" action="#" onSubmit={submitHandler}>
          <div class="form-group">
              <label class="control-label col-sm-2 text-primary">
                Full Name
              </label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  id="Pname"
                  placeholder="Enter Full Name"
                  name="Pname"
                  pattern=".{1,15}"
                  required
                  onChange={e => handleName(e.target.value, "Pname")}
                  value={person.Pname}
                 
                />
                <div id="PnameValidation"></div>
              </div>
            </div>

            <div class="form-group">
              <label class="control-label col-sm-2 text-primary">Email</label>
              <div class="col-sm-9">
                <input
                  type="Email"
                  class="form-control"
                  id="email"
                  pattern=".{7,15}"
                  required
                  
                  placeholder="Enter Email (Example@gmail.com)"
                  name="email"
                  onChange={e => setPerson({...person,"email":e.target.value})}
                  value={person.email}
                />
              </div>
            </div>

           <div class="form-group">
              <label class="control-label col-sm-2 text-primary">Address</label>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  id="paddress"
                  placeholder="Enter Address"
                  value={person.address}
                  name="address"
                  pattern=".{1,15}"
                  required
                  onChange={e => handleLength(e.target.value, "address")}
                />
                <div id="addressValidation"></div>
              </div>
            </div>

             <div class="form-group">
              <label class="control-label col-sm-2 text-primary">Date</label>
              <div class="col-sm-9">
                <input
                  type="date"
                  value={person.date}
                  class="form-control"
                  id="pdate"
                  pattern=".{1,15}"
                  required
                  name="date"
                  onChange={e => setPerson({...person,"date":e.target.value})}
                />
              </div>
            </div>

            <div class="form-group ">
              <label class="control-label col-sm-2 text-primary">Gender</label>
              <div class="col-sm-9">
                <select class="form-control" id="pgender" name="gender" value={person.gender}
               onChange={e => setPerson( {...person, "gender": e.target.value})}
                >
                  <option selected>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="control-label col-sm-2 text-primary">
                Mobile Number
              </label>
              <div class="col-sm-9">
                <input
                  type="tel"
                  value={person.mobileNo}
                  class="form-control"
                  id="mobileNo"
                  placeholder="Enter Mobile Number (0300-1111234)"
                  name="mobileNo"
                  pattern="[0-9]{4}-[0-9]{7}"
                  required
                  onChange={e => handleMobile(e.target.value, "mobileNo")}
                />
                <div id="mobileNoValidation"></div>
              </div>
            </div>

{/*  */}

            <div class="title">
              <h2 class="text-success">Metric Information</h2>
            </div>

            
              <div class="form-group">
                <label class="control-label col-sm-2 text-primary">
                  Full Name
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    value={metric.Mname}
                    class="form-control"
                    id="Mname"
                    placeholder="Enter Full Name"
                    name="Mname"
                    pattern=".{0,15}"
                    required
                    onChange={e => mHandleName(e.target.value, "Mname")}
                  />
                  <div id="MnameValidation"></div>
                </div>
              </div>

              <div class="form-group">
                <label class="control-label col-sm-2 text-primary">
                  Roll No
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    value={metric.MrollNo}

                    class="form-control"
                    id="MrollNo"
                    pattern=".{0,15}"
                    required
                    placeholder="Enter Roll No"
                    name="MrollNo"
                    onChange={e => mHandleName(e.target.value, "MrollNo")}
                  />
                   <div id="MrollNoValidation"></div>
                </div>
              </div>

              <div class="form-group">
                <label class="control-label col-sm-2 text-primary">
                  Marks Obtained
                </label>
                <div class="col-sm-9">
                  <input
                    type="number"
                    value={metric.MobtainedMarks}
                    class="form-control"
                    id="MobtainedMarks"
                    pattern=".{1,15}"
                    required
                    placeholder="Enter Marks Obtained"
                    name="MobtainedMarks"
                    onChange={e => mStringHandler(e.target.value, "MobtainedMarks")}
                  />
                  <div id="MobtainedMarksValidation"></div>

                </div>
              </div>

              <div class="form-group">
                <label class="control-label col-sm-2 text-primary">Year</label>
                <div class="col-sm-9">
                  <input
                    type="tel"
                    value={metric.Myear}
                    class="form-control"
                    id="Myear"
                    placeholder="Enter Passed Year (2020 e.g)"
                    pattern="[0-9]{4}"
                    required
                    name="Myear"
                    onChange={e => mYearHandler(e.target.value, "Myear")}
                    />
                    <div id="MyearValidation"></div>
                </div>
              </div>
              
              

 {/*  */}

            <div class="title">
              <h2 class="text-success">Intermediate Information</h2>
            </div>

              <div class="form-group">
                <label class="control-label col-sm-2 text-primary">
                  Full Name
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    value={inter.Iname}
                    class="form-control"
                    id="Iname"
                    placeholder="Enter Full Name"
                    pattern=".{0,15}"
                    required
                    name="Iname"
                    onChange={e => iHandleName(e.target.value, "Iname")}
                  />
                   <div id="InameValidation"></div>
                </div>
              </div>

              <div class="form-group">
                <label class="control-label col-sm-2 text-primary">
                  Roll No
                </label>
                <div class="col-sm-9">
                  <input
                    value={inter.IrollNo}
                    type="text"
                    class="form-control"
                    id="Irollno"
                    placeholder="Enter Roll No"
                    pattern=".{0,15}"
                    required
                    name="IrollNo"
                    onChange={e => iHandleName(e.target.value, "IrollNo")}
                  />
                   <div id="IrollNoValidation"></div>
                </div>
              </div>

              <div class="form-group">
                <label class="control-label col-sm-2 text-primary">
                  Marks Obtained
                </label>
                <div class="col-sm-9">
                  <input
                    type="number"
                    value={inter.IobtainedMarks}
                    class="form-control"
                    id="IobtainedMarks"
                    placeholder="Enter Marks Obtained"
                    
                  required
                    name="IobtainedMarks"
                    onChange={e => iStringHandler(e.target.value, "IobtainedMarks")}
                    />
                    <div id="IobtainedMarksValidation"></div>
                </div>
              </div>

              <div class="form-group">
                <label class="control-label col-sm-2 text-primary">Year</label>
                <div class="col-sm-9">
                  <input
                    type="tel"
                    value={inter.Iyear}
                    class="form-control"
                    id="Iyear"
                    placeholder="Enter Passed Year (2020 e.g)"
                    pattern="[0-9]{4}"
                    required
                    name="Iyear"
                    onChange={e => iYearHandler(e.target.value, "Iyear")}
                    />
                    <div id="IyearValidation"></div>
                </div>
              </div>

{/*  */}

              <div class="title">
              <h2 class="text-success">University</h2>
            </div>

            
              <div class="form-group">
                <label class="control-label col-sm-2 text-primary">
                  University Name
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    value={uni.Uname}
                    class="form-control"
                    id="Uname"
                    placeholder="Enter Full Name"
                    pattern=".{0,25}"
                    required
                    name="Uname"
                    onChange={e => uHandleName(e.target.value, "Uname")}
                    />
                    <div id="UnameValidation"></div>
                </div>
              </div>

              <div class="form-group ">
                <label class="control-label col-sm-2 text-primary">
                  Degree Program
                </label>
                <div class="col-sm-9">
                  <select class="form-control" id="dProgram" name="degreeProgram"
                    value={uni.programe}
                  onChange={e => setUni({...uni,"programe" :e.target.value})}
                  >
                    <option selected>BSSE</option>
                    <option>BSCS</option>
                    <option>BSIT</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label class="control-label col-sm-2 text-primary">CGPA</label>
                <div class="col-sm-9">
                  <input
                    type="tel"
                    class="form-control"
                    id="cgpa"
                    placeholder="Enter CGPA (3.00 e.g)"
                    value={uni.cgpa}
                    name="cgpa"
                    min="0" max="4.00"
                    pattern="[0-4]{1}.[0-9]{2}"
                  required
                  onChange={e => uHandlecgpa(e.target.value, "cgpa")}
                    />
                    <div id="cgpaValidation"></div>
                </div>
              </div>


              <div class="form-group">
                <div class="col-sm-offset-5 col-sm-2">
                  <input
                  type="Submit"
                  value="Submit"
                    class="btn btn-primary"
                    id="submitButton"
                  /> 
            
                </div>
              </div>
          </form>
        </div>
      </body>
      
    </div>
    
   
  );
}

export default FormVal;
