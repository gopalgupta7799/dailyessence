import React, { useState } from "react";
import {signInWithEmailAndPassword} from 'firebase/auth';
import { Link } from 'react-router-dom';
import { auth } from "./fire";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // firebase 


  return (
    <div>
      <form >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </div>
        <Link to="/" onClick={(event) => {
          alert("Login success");
          signInWithEmailAndPassword(auth,email, password
          ).then(() => {

          }).catch((error) => {
            alert("No user exist" + error);
          })
        }} style={{ marginLeft: "190px" }} className="btn btn-primary">
          Login
        </Link>


        {/* <button type="button" style={{marginLeft:"10px"}}  className="btn btn-primary">
          Change Password
        </button> */}
      </form>
    </div>
  );
}








