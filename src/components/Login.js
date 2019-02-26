import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import LinkedinSDK from 'react-linkedin-sdk'
import { LinkedIn } from 'react-linkedin-login-oauth2';


class Login extends Component {



  state = {
    code: '',
    errorMessage: '',
  };


  handleSuccess = (data) => {
    // console.log("LinkedIn Data",data.getBasicProfile());
    this.setState({
      code: data.code,
      errorMessage: '',
    });
  }

  handleFailure = (error) => {
    this.setState({
      code: '',
      errorMessage: error.errorMessage,
    });
  }

  render() {
    console.log("Hello World Login Page");
    const { code, errorMessage } = this.state;


    const responseFacebook = (response) => {
      console.log("Facebook Responce",response);
    }

    const callbackLinkedIn = (response,error) => {

      if(response){
        console.log("LinkedIn Responce",response);

      }
      if(error){
        console.log("LinkedIn Error",error);

      }
    }

    return (
      <div className="App">
        <h1>Login With Facebook and LinkedIn</h1>

        <FacebookLogin
        appId="2099920520091784"
        fields="name,email,picture"
        callback={responseFacebook}
      />
        {/* <LinkedinSDK
        clientId="77mh7zgv7lrcb6"
        callBack={callbackLinkedIn}
        fields=":(id,num-connections,picture-urls::(original))"
        className={'className'}
        loginButtonText={'Login with Linkedin'}
        logoutButtonText={'Logout from Linkedin'}
        buttonType={'button'}
        redirectUri='http://localhost:3000/linkedin'
        getOAuthToken
      /> */}

       <LinkedIn
          clientId="77mh7zgv7lrcb6"
          clientSecret="3DeWXvnsWeOtK783"
          scope = 'r_basicprofile r_emailaddress r_contactinfo r_network'
          onFailure={this.handleFailure}
          onSuccess={this.handleSuccess}
          redirectUri="http://localhost:3000/linkedin"
        >
        </LinkedIn>
        {!code && <div>No code</div>}
        {code && <div>Code: {code}</div>}
        {errorMessage && <div>{errorMessage}</div>}

    
        
      </div>
    )
  }
}
export default Login;
