import React from "react";
import { Link } from "react-router-dom";

const Footer =()=>{
    return(
        <>
        <footer className="page-footer font-small blue">
            <div className="footer-copyright text-center py-3">© 2022 Copyright:
                <Link to="/" style={{textDecoration:'none'}}> Interview Experience</Link>
            </div>
        </footer>
        </>
    )
};

export default Footer;