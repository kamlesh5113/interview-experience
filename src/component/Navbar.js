import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useHistory } from "react-router-dom";
import { confirm } from './confirmable.js';

const Navbar=({setid})=>{

    const id = localStorage.getItem('token');
    const name = localStorage.getItem('name');
    
    let history = useHistory();
    
    const logout = async() =>{
        if( await confirm("Are you sure to logout?"))
        {
            window.localStorage.clear();
            setid(' ');
            history.push('/');
        }
}

    if(id)
    {
        return(
            <>
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to='/' style={{color:'green',background:'none',textDecoration:'none',fontSize:'20px'}}>
                            Interview Experiences
                        </Link>
                        <button type="button" className="navbar-toggle" data-toggle='collapse' data-target='#myNavbar'>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
    
                    </div>
                    <div className="collapse navbar-collapse" id='myNavbar'>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item">
                            <Link to='/addintereview' className="nav-link" style={{fontSize:'16px'}}>
                                Add Interview Experiences
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/viewaddedexperience/${id}`} className="nav-link" style={{fontSize:'16px'}}>
                            View Added Experiences
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link to={`/profile/${id}`} className="nav-link" style={{fontSize:'16px'}}>
                            {name}
                            </Link>
                        </li>
                        <li className="nav-item" style={{paddingTop:'10px'}}>
                            <button type="button" className="nav-link" style={{fontSize:'16px',color:'red'}}
                            onClick={logout}
                            >
                            <span className="glyphicon glyphicon-log-out"></span> logout
                            </button>
                        </li>
                    </ul>
                    </div>
    
                </div>
            </nav>
            
            </>
        )
    }
    else{

    return(
        <>
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <Link className="navbar-brand" to='/' style={{color:'green',background:'none',textDecoration:'none',fontSize:'20px'}}>
                        Interview Experiences
                    </Link>
                    <button type="button" className="navbar-toggle" data-toggle='collapse' data-target='#myNavbar'>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>

                </div>
                <div className="collapse navbar-collapse" id='myNavbar'>
                <ul className="nav navbar-nav navbar-right">
                    <li className="nav-item">
                        <Link to='addintereview' className="nav-link" style={{fontSize:'16px'}}>
                            Add Interview Experiences
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/login' className="nav-link" style={{fontSize:'16px'}}>
                            <span className="glyphicon glyphicon-log-in"></span> Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/signup' className="nav-link" style={{fontSize:'16px'}}>
                        <span className="glyphicon glyphicon-user"></span> signup
                        </Link>
                    </li>
                </ul>
                </div>

            </div>
        </nav>
        
        </>
    )
    }
};

export default Navbar;