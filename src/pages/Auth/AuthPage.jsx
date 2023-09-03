import SignUpForm from "../../components/SignUp/SignUpForm"
import LoginForm from "../../components/LoginForm/Login"
import { useState } from "react"

export default function AuthPage({setUser}) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <main className='auth'>
      <div className="title">
        <h1>MUSIQGRAM</h1>
        
        <button className="titleBtn"
          onClick={() => {
            setShowLogin(!showLogin);
          }}
        >
          {showLogin ? 'Sign Up' : 'Login'}
        </button>
      </div>
        <div className="login">
          
      {showLogin ? <LoginForm setUser={setUser}/> : <SignUpForm setUser={setUser}/>}
        </div>
    </main>
  );
}