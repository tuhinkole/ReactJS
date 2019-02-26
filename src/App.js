import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Contact from './components/Contact';
import Header from './components/Header';
import Contacts from './components/Contacts'
import Login from './components/Login'
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { LinkedInPopUp } from 'react-linkedin-login-oauth2';



class App extends Component {
  render() {
    

    // const name ="Tuhin";
    // const visible = true;
    // const showMath = true;
    // const num1 = 40;
    // const num2 =60;
    // let math;
    // let math2;
    // if(showMath){
    //   math=<h4>1+1={1+1}</h4>;

    //   math2=<h4>This Sum of {num1}+{num2}={num1+num2}</h4>

    // }else{
    //   math=null;
    //   math2=null;
    // }

    // return React.createElement(
    //   'div',
    //   {className:'app'},
    //   React.createElement('h1',null,'The App')

    // )

    
    return (
      <Router>
        <div className="App">
        <h1>The App Component</h1>
        <Header name="Contact Manager"/>
        <Route exact path="/linkedin" component={LinkedInPopUp} />
        <Route path="/contacts" exact strict component={Contacts}/>
        <Route path='/login' exact strict component={Login}/>
      
       
        
        {/* <Contact  name="Tuhin Kole" email="tuhin.kole@appsolzone.com"
                  phone="9732202664"/> */}
                  {/* <Contacts/> */}

      

        {/* <div>
          <h1>New App</h1>
        </div>

        {visible ? <label htmlFor="name">My Name is {name}</label> : null}
        
        <br/>
        <input type="text"/>

        {math}
        {math2} */}
       
      </div>
      </Router>
    );
  }
}

export default App;
