import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useHistory } from "react-router-dom";

const Login = ({setid}) =>{

    console.log(process.env.REACT_APP_BACKEND_URL)

    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');

    let history = useHistory();

    const submit = async(event) =>{
        event.preventDefault();

        if(email === ' ' || password === ' ')
        {
            alert("please enter email or password");
        }
        const user = {
            email: email,
            password: password
        }

        try{

           await fetch(process.env.REACT_APP_BACKEND_URL+'/user/login',
           {
            method: 'POST', 
            headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(user),
           }).then(response => response.json()).then(res=>{
            
            if(res)
            {
                setid(res.id);

                localStorage.setItem("token", res.id);
                localStorage.setItem("name", res.name);

                history.push('/');
            }
            else
            {
                alert("Wroung email or password");
            }

           }).catch(err=>{
            alert("Wroung email or password");
           })


        }catch(err){
            alert("Unkown error");
        }



    }




    return(
        <>
        <div className="panel panel-default">
            <div className="container">
                <div className="panel-body">
        <form className="form">
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input className="form-control" type='email' placeholder='enter email'
                onChange={ event=> setemail(event.target.value) }
                />
            </div>

            <div className='form-group'>
                <label htmlFor="password">Password</label>
                <input className="form-control" type='password' placeholder='enter password'
                onChange={ event => setpassword(event.target.value) }
                />
            </div>

            <div className="form-group">
                <button type="button" className="btn btn-success"
                onClick={submit}
                >Login</button>
            </div>
        </form>
        </div>
        <div className="panel-footer" style={{background:'none',border:'none'}}>
            <Link to='/ForgetPassword' style={{textDecoration:'none'}}>forget password</Link>
        </div>
        </div>
        </div>
        </>
    )
};

export default Login