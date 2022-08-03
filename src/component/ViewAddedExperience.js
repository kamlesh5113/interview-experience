import axios from "axios";
import React, { useState,useEffect } from "react";
import {  useHistory} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { confirm } from './confirmable.js';







function Card({inter1, deletehandler})
{
    let str = inter1.experience;
    const d = inter1._id;
    str = str.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '<br/>');
    return(
        <>
        <div dangerouslySetInnerHTML={{__html: str}} />;
             <button type="button" className="btn btn-danger" name={d} onClick={deletehandler}  >Delete</button> 
        <br/>
        <hr/>
        </>
    )
}

const ViewAddedExperience = () =>{

    const deletehandler = async(event) =>{

        if( await confirm("Are your sure?") )
        {
        const id = event.target.name;
       
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/interview/${id}`).then((res)=>{
            alert("Deleted Successfully");
        }).catch(err=>{
            alert("No deletion occured")
        })
    }
    }


    const [interview,setinterview] = useState([]);

    const id = localStorage.getItem('token');

    const history = useHistory();
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/interview/get/${id}`).then((res)=>{
        if(res.data)
        {
            setinterview(res.data);
        }
    }).catch(err=>{

    })
},[interview,id]);

    
    if(id !== null)
    {
    return(
        <>
        <div className="container">
      {
      interview.map(val =>
          <Card key={val.id} inter1 = {val} deletehandler = {deletehandler} />
      )
      }
      </div>
        </>
    )
    }
    else
    {
        history.push('/login');
    }
}

export default ViewAddedExperience;