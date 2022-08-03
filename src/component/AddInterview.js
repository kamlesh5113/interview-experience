import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddInterview = ({id})=>{

    const [title,settitle] = useState('');

    const [company,setcompany] = useState('');

    const [desc,setdesc] = useState('');

    id = localStorage.getItem('token');

    const Submit = () =>{
        if(title === ' ' || company === ' ' || desc === ' ')
        {
            alert("Please Fill All Fields");
        }
        else
        {
            var str = company.toLowerCase();
            const inter = {
                uid:id,
                title:title,
                company:str,
                experience:desc
            }
            axios.post(process.env.REACT_APP_BACKEND_URL+'/interview',inter).then((res)=>{
                if(res.data)
                {
                    alert("Successfully Added");
                }
            }).catch((err)=>{
                alert("Something went wroung try again");
            })
        }
    }

    let history = useHistory();

    console.log(id);

    if(id !== null)
    {
    return(
        <>
          <center> <h2> Add Your Interview Experiences Here </h2> </center><br/>
          <div className="container col-lg-12 col-sm-12 col-sm-12 col-xs-12" style={{paddingLeft:'10%'}}>
          <form className="form">
          <div className="form-group" style={{width:'50%'}}>
                <label htmlFor="title">Title</label>
                <input type='text' className="form-control" placeholder="enter title for your interview experience"
                onChange={event=>{settitle(event.target.value)}}
                />
            </div>

            <div className="form-group" style={{width:'50%'}}>
                <label htmlFor="Company Name">Company Name</label>
                <input type='text' className="form-control" placeholder="enter company name"
                onChange={event=>{setcompany(event.target.value)}}
                />
            </div>
            <br/>
            <div className="form-group" style={{width:'100%',height:'100%'}}>
            <label>Enter Your Whole Interview Experiences Here In Detail From Starting Till The End</label>
            <textarea className="form-control" style={{height:'400px'}} placeholder='enter details here'
            onChange={event=>{setdesc(event.target.value)}}
            />
            </div>

            <div className="form-group">
                <button type="button" className="btn btn-success" onClick={Submit}>Add</button>
            </div>

          </form>


          </div>
        </>
    );
    }
    else
    {
        history.push('/login');
    }
};


export default AddInterview;