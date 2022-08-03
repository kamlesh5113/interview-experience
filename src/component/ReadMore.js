import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";







const ReadMore = () =>{

    const [interview, setinterview] = useState([]);

    const id = useParams().id;

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/interview/${id}`).then((res)=>{
            if(res.data)
            {
                setinterview(res.data);
            }
        }).catch((err)=>{
        });
    },[id]);

     let str = interview.experience;
     if(str)
     {str = str.replace(/([^,>\r\n]?)(\r\n|\n\r|\r|\n)/g, '<br/>');}
    return(
        <>
        <div className="container-fluid">
            <center><h1>{interview.title}</h1></center>
            <div dangerouslySetInnerHTML={{__html: str}} />
        </div>
        </>
    )
};

export default ReadMore;