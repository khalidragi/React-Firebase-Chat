import React from 'react';
import { useAuth } from '../../config/useAuth';
import './login.css';

const Login = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <div className="login">
      <div className="login__screen">
        <h2>Welcome to Talky, Please sign in...</h2>
        <button className="sign-in" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
