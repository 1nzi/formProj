import React,{useState,useEffect} from 'react'
import firebase from "../firebase";
import "./style.css"
import TableInfo from './Tableinfo';

export default function CompleteInfo() {

    const [personArr,setPersonArr]=useState();
  
  
    useEffect(() => {
      const formRef=firebase.database().ref('FormData');
      formRef.on('value',(snapshot)=>{
  
          const Plist=snapshot.val();
          const personArr=[];
          for(let id in Plist)
          {
            personArr.push({id,...Plist[id]});
  
          }

          setPersonArr(personArr);
          console.log("in Array1",personArr);

          
      });
     
  }, [])
  
  

    return (
        <div>
            <h1>in Complete Info</h1>

    <h1></h1>

            <div>
            <table class="tablediv">
                <thead>
                 <tr>
                    <th>InterName</th>
                    <th >Inter-Obt-M</th>
                    <th>I-Roll-No</th>
                    <th >I-Year</th>
                    <th>MetricName</th>
                    <th >M-Obt-M</th>
                    <th>M-roll-No</th>
                    <th >M-Year</th>
                    <th>Person-Name</th>
                    <th >Uni-Name</th>
                    <th>Address</th>
                    <th >Uni-CGPA</th>
                    <th>Date</th>
                    <th >Email</th>
                    <th>Gender</th>
                    <th >Mobile-No</th>
                    <th>Uni-Degree</th>
                    <th>Delete</th>
                    <th>Edit</th>
                    <th>Profile</th>

                    </tr>
                    </thead>
                    <tbody>
                    
    {personArr?personArr.map((todo,index)=> <TableInfo Parray={todo} key={index} />  ):"sdfsdfs"}
    
    </tbody>
            </table>
            </div>

        </div>
    )
}
