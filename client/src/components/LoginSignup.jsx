import { useContext, useState } from 'react';
import './LoginSignup.css';
import {onAuthStateChanged} from 'firebase/auth';
import LoginPage from '../components/LoginPage';
import SignupPage from '../components/SignupPage';
import { AuthContext } from './Auth';
import { Navigate } from 'react-router-dom';
import { auth } from './fire';

function LoginSignup() {
  const [componentRender, setComponentRender] = useState(true);
  const [userInfo, setUserInfo] = useState("User not exist")
  const { currentUser } = useContext(AuthContext)
  // Get Uid/email or You are not log in
  function CheckStatus() {

    onAuthStateChanged(auth,
      (user) => {
        if (user) {
          setUserInfo(user.email)
        }
      }
    )
  }
  if (!currentUser) {
    return (
      <div className="width-height margin-auto">
        <h5 style={{ textAlign: "center", padding: "20px" }}>{CheckStatus()}USER: {userInfo ? userInfo : "not exist"}</h5>
        <div className="d-flex">
          <h4 onClick={() => setComponentRender(true)} className={`width-50 p-2 rounded-start text-center pointer ${componentRender ? "bg-dark text-white" : ""}`}>Login</h4>
          <h4 onClick={() => setComponentRender(false)} className={`width-50 p-2 rounded-end text-center pointer ${componentRender ? "" : "bg-dark text-white"}`}>SignUp</h4>
        </div>
        {componentRender ? <LoginPage /> : <SignupPage />}
      </div>
    );
  }
  else {
    return <Navigate to="/" />
  }
}

export default LoginSignup;