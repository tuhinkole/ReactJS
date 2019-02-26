import React, { Component } from 'react'
import Contact from './Contact';
import Login from './Login';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { Redirect } from 'react-router-dom'

// import { push } from 'react-router-redux'
class Contacts extends Component {
    state = {
        redirect: false
      }
    

    constructor(){
        super();
        this.state = {
            contacts:[
                {
                    id:1,
                    name:'Tuhin',
                    email:'a@a.com',
                    phone:'9732202664'
                },
                {
                    id:2,
                    name:'Musha',
                    email:'a@a.com',
                    phone:'9732202664'
                },
                {
                    id:3,
                    name:'Pallab',
                    email:'a@a.com',
                    phone:'9732202664'
                }
            ]

        }

    }

    setRedirect = () => {
        console.log("Hello")
        this.setState({
          redirect: true
        })
      }

      renderRedirect = () => {
          console.log("Hello")
        if (this.state.redirect) {
          return <Redirect to='/login' exact strict component={Login} />
        }
      }


    
     
    
  render() {

    console.log("Hello World Contacts Page");
        
      const {contacts} = this.state;
    return (
       
      <div>

        {contacts.map(contact=>(
            <Contact  
                    key={contact.id}
                    name={contact.name}
                    email={contact.email}
                    phone={contact.phone}/>
        ))}
        {this.renderRedirect()}
        <button type="submit" onClick={this.setRedirect}>Login</button>
        
      </div>
    )
  }
}

export default Contacts;
