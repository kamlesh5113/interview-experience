import axios from "axios";
import React, { useEffect, useState }  from "react";
import { Link, useParams } from "react-router-dom";


const Profile = () =>{

    const id = useParams().id;

    const [user,setuser] = useState([]);
    const [user1,setuser1] = useState([]);

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/${id}`).then(res=>{
            if(res.data)
            {
                setuser(res.data);
            }
        }).catch(err=>{
        })
    },[id]);

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/interview/get/${id}`).then(res=>{
            if(res.data)
            {
                setuser1(res.data);
            }
        }).catch(err=>{
        })
    },[id]);

    console.log(user);

    return(
        <>
        <div className="container">
        <h4> Name  {user.name}</h4>
        <h4>Total intreview experience:  {user1.length}</h4>
        <h4>View all experiences:  <Link to={`/viewaddedexperience/${id}`}> <button type="button" className="btn btn-primary">View</button></Link> </h4>
        </div>

        </>
    )
}

export default Profile;