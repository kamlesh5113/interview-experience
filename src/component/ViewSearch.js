import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";




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


const ViewSearch = () =>{

    const id = useParams().id;
    console.log(id);

    const [interview , setinterview] = useState([]);

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/interview/byName/${id}`).then((res)=>{
            if(res.data)
            {
                setinterview(res.data);
            }
        }).catch((err)=>{
        });
    },[id]);

    
    return(
        <>
        <div>
            <div className="container-fluid">
                <h2>Search Company "{id}":  </h2><br/>
      {
      interview.map(val =>
          <Card inter1 = {val} />
      )
      }
      </div>

        </div>
        </>
    )
};

export default ViewSearch;