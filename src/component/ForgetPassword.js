import axios from "axios";
import React, { useState } from "react";

import { useHistory } from "react-router-dom";


const ForgetPassword = () =>{
    const history = useHistory();

    const [email,setemail] = useState('');

   
    let userID = '';

    const submit=(event)=>{
        event.preventDefault();
        if(email === '')
        {
            alert("Enter correct email");
        }
        else
        {
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/getbyemail/${email}`).then((res)=>{
                if(res.data.id)
                {
                    userID = res.data.id;
                    history.push(`/ForgetPasswordnew/${userID}`);
                }
                else
                {
                    alert("Enter Correct Email");
                }
            }).catch(err=>{
                alert("Enter Correct Email");
            })
        }
    }

    

    
    return(
        <>
        <div className="container">
            <h2>Reset Your Password Here</h2>
            <br/><br/>
            <form className="form">
                <div className="form-group">
                    <label>Enter Email</label>
                    <input type='email' className="form-control" placeholder='enter email' style={{ width:'50%' }}
                    onChange={ event=>{ setemail(event.target.value) }  }
                    />
                </div>
                <button className="btn btn-primary" type="button" onClick={submit}>Submit</button>
            </form>
        </div>
        </>
    )
};

export default ForgetPassword;