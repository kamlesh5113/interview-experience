import React, { useState } from "react";
import axios from 'axios'

const Signup = () =>{
    const [name,setname] = useState('');
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [password1,setpassword1] = useState('');

    const submit = (event) =>{

        event.preventDefault();

        if(name === ' ' || email === ' ' || password === ' ' || password1 ===' ')
        {
            alert("Please fill all fields");
        }
        if(password !== password1)
        {
            alert("Password not match");
        }
        else{
        const user={
            name:name,
            email:email,
            password:password
        };

        axios.post(process.env.REACT_APP_BACKEND_URL+'/user', user).then(res=>{
            if(res.data)
            {
                alert("Registered successfull");
            }else{alert("email exist");}
        }).catch(err=>{
            alert("Error");
        });
    }
    };




    return(
        <>
        <div className="panel panel-default">
            <div className="container">
                <div className="panel-body">
        <form className="form">
        <div className="form-group">
                <label htmlFor="email">UserName</label>
                <input className="form-control" type='text' placeholder='enter username'
                onChange={(event=> setname(event.target.value))}
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input className="form-control" type='email' placeholder='enter email'
                onChange={ event=> setemail( event.target.value ) }
                />
            </div>

            <div className='form-group'>
                <label htmlFor="password">Password</label>
                <input className="form-control" type='password' placeholder='enter password'
                onChange={ event=>{ setpassword(event.target.value) } }
                />
            </div>
            <div className='form-group'>
                <label htmlFor="password">Confirm Password</label>
                <input className="form-control" type='password' placeholder='enter password'
                onChange={ event=>{ setpassword1(event.target.value) } }
                />
            </div>

            <div className="form-group">
                <button type="button" className="btn btn-success"
                onClick={submit}
                >Signup</button>
            </div>
        </form>
        </div>
        </div>
        </div>
        </>
    )
};

export default Signup;