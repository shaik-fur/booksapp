import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from './refreshToken';
import {useHistory} from "react-router-dom";

const clientId =
  '466335527908-4o0rgob01n67tmjbji3ck7vgho9sqnjo.apps.googleusercontent.com';

function Login() {
    let history = useHistory();
  const onSuccess= (res) => {
    alert("logged in successfully");
    history.push({
      pathname: "/home",
      state:{res : res.Lu.tf}
    });
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 please ping this to shaikfurkhan1998@gmail.com`
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px', alignSelf:"center" }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;