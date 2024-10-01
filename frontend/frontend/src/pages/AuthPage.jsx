import {React,useState} from "react";
// import styles from './AuthPage.module.css';
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";
export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <div>
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
      </div>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />} 
    
    </>
  );
}

