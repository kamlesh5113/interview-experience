import axios from "axios";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";


const ForgetPasswordnew = () =>{

    const [password,setpassword] = useState('');

    const history = useHistory();

    const userID = useParams().id;

    const submit1=(event)=>{
        event.preventDefault();
        if(password === '')
        {
            alert("Enter correct password");
        }
        else
        {
            const user = {
                password: password
            };
            axios.put(`${process.env.REACT_APP_BACKEND_URL}/user/${userID}` , user).then((res)=>{
                if(res.data)
                {
                    alert("Password Changed Successfully");
                    history.push('/login');
                }
                else
                {
                    alert("Try Again");
                }
            }).catch(err=>{
                alert("Try Again");
            })
        }
    }


    return(
        <>
        <div className="container">
        <br/><br/>
        <form className="form">
            <div className="form-group">
                <label>Enter New Password</label>
                <input type='password' className="form-control" placeholder='enter new password' style={{ width:'50%' }}
                onChange={ event=>{ setpassword(event.target.value) }  }
                />
            </div>
            <button className="btn btn-primary" type="button" onClick={submit1}>Submit</button>
        </form>
    </div>
        </>
    )
}

export default ForgetPasswordnew;