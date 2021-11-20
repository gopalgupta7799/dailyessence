import React, { useState } from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { Link } from "react-router-dom"
import { auth } from "./fire";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
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

          console.log(email, password);
          // Firebase
          alert("User Created")
          createUserWithEmailAndPassword(auth, email, password)
            .then(() => {

            }).catch(() => {
              alert("Error Occured or user not created")
            })
        }} style={{ marginLeft: "185px" }} className="btn btn-primary">
          Signup
        </Link>
      </form>
    </div>
  );
}