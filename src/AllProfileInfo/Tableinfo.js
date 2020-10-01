import React from 'react';
import firebase from "../firebase";
import { useHistory } from 'react-router-dom';


function Tableinfo({Parray}) {
console.log("In Table Info", Parray)

const history=useHistory()

function deleteHandler(){

    const pRef=firebase.database().ref('FormData').child(Parray.id);
        pRef.remove();
}
function editHandler(){
    history.push({ 
        pathname: '/',
        state:{
          obj:[Parray]
        }
       });

}
function profileHandler(){

    history.push({ 
            pathname: '/controller',
            state:{
              obj:[Parray]
            }
           });
}


    return (
       
   
   <tr key={Parray.id}>
    <td>{Parray.Iname}</td>
   <td>{Parray.IobtainedMarks}</td>
   <td>{Parray.IrollNo}</td>
   <td>{Parray.Iyear}</td>
   <td>{Parray.Mname}</td>
   <td>{Parray.MobtainedMarks}</td>
   <td>{Parray.MrollNo}</td>
   <td>{Parray.Myear}</td>
   <td>{Parray.Pname}</td>
   <td>{Parray.Uname}</td>
   <td>{Parray.address}</td>
   <td>{Parray.cgpa}</td>
   <td>{Parray.date}</td>
   <td>{Parray.email}</td>
   <td>{Parray.gender}</td>
   <td>{Parray.mobileNo}</td>
   <td>{Parray.programe}</td>
   <td><button onClick={deleteHandler}>Delete</button></td>
   <td><button onClick={editHandler}>Edit</button></td>
   <td><button onClick={profileHandler}>Profile</button></td>
   </tr>

  
   

    );
}

export default Tableinfo;