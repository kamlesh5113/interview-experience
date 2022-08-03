import React, { useState } from "react";

import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import AddInterview from "./component/AddInterview";
import Dashboard from "./component/Dashboard";
import Footer from "./component/Footer";
import ForgetPassword from "./component/ForgetPassword";
import ForgetPasswordnew from "./component/ForgetPasswordnew";
import Login from "./component/Login";
import Navbar from "./component/Navbar";
import Profile from "./component/Profile";
import ReadMore from "./component/ReadMore";
import Signup from "./component/Signup";
import ViewAddedExperience from "./component/ViewAddedExperience";
import ViewSearch from "./component/ViewSearch";

function App() {

  const [id,setid] = useState('');

  return (
    <>
    <Router>
      <Navbar setid={setid} />  <br/><br/><br/><br/><br/>
      <Switch>
          <Route path='/' exact>
            <Dashboard/>
          </Route>

          <Route path='/login' exact>
            <Login setid={setid}/>
          </Route>

          <Route path='/signup' exact>
            <Signup/>
          </Route>

          <Route path='/addintereview' exact>
            <AddInterview id={id}/>
          </Route>

          <Route path='/viewaddedexperience/:id' exact>
            <ViewAddedExperience/>
          </Route>

          <Route path='/read-more/:id' exact>
            <ReadMore/>
          </Route>

          <Route path='/profile/:id' exact>
            <Profile/>
          </Route>

          <Route path='/ForgetPassword' exact>
            <ForgetPassword/>
          </Route>

          <Route path='/viewSearch/:id' exact>
            <ViewSearch/>
          </Route>

          <Route path='/ForgetPasswordnew/:id' exact>
            <ForgetPasswordnew/>
          </Route>


      </Switch>
      <Footer/>
    </Router>
    </>
  );

}

export default App;

