import React, { useEffect, useState } from 'react';
import firebase from "../firebase";
import CardMaker from "./CardMaker"

function CardView(props) {

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
            

        });
    },[])
    console.log("in CardView",personArr)
    
    return (
        
        <div>
            <head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </head>
            <h1>Cards Info</h1>

            <div class="card">
                
    {personArr?personArr.map((todo,index)=> <CardMaker Parray={todo} key={index} />  ):"sdfsdfs"}

                

            </div>


        </div>
    );
}

export default CardView;