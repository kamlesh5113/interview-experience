import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

function Card({inter1})
{
    let str = inter1.experience;
    str = str.replace(/([^,>\r\n]?)(\r\n|\n\r|\r|\n)/g, '<br/>');
    let str1 = str.substring(0,1000)+ "..............";
    return(
        <>
        <h2>{inter1.title}</h2>
        <div dangerouslySetInnerHTML={{__html: str1}} />;

        <Link to={`/read-more/${inter1._id}`} style={{FontSize:'50px'}}>Read More</Link>
        <hr style={{color:'black'}}/>
        <br/>
        </>
    )
}

const Dashboard = () =>{

    const [search, setsearch] = useState('');


    const [intreview, setinterview] = useState([]);

    const history = useHistory();
    

    useEffect(()=>{
        axios.get(process.env.REACT_APP_BACKEND_URL+'/interview').then((res)=>{
            if(res.data)
            {
                setinterview(res.data);
            }
        }).catch((err)=>{
        });
    },[]);

    const submit = (event) =>{
        event.preventDefault();
        if(search === '')
        {
            alert("Enter a valid name");
        }
        else{
            history.push(`/viewSearch/${search.toLowerCase()}`);
        }
    }
    return(
        <div>
            <form className="form">
                <div className="form-group">
                <center><input type='text' className='form-control' placeholder='search by exact company name' style={{width:'50%'}}
                onChange = { event=>{ setsearch(event.target.value) } }
                />
                    <button type='button' className="btn btn-default" style={{marginTop:'6px'}}
                    onClick={submit}>Search</button></center>
                </div>
            </form>
            <br/><br/>
            <div className="container-fluid">
      {
      intreview.map(val =>
          <Card inter1 = {val} />
      )
      }
      </div>

        </div>
    )
};

export default Dashboard;