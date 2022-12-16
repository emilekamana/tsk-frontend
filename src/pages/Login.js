import axios from "../api";
import React, { useState } from "react";

export default function Login(){
  const [email, setEmail] = useState("");
  const onChangeEMail = (e) => {
    setEmail(e.target.value);
  }

  const [password, setPassword] = useState("");
  const onChangePass = (e) => {
    setPassword(e.target.value);
  };

  const loginUser = async (data) => {
    const res = await axios.post("/auth/login", data);
    console.log(res);
    localStorage.setItem("user", res.user);
    localStorage.setItem("acess-token", res.accessToken);
    localStorage.setItem("refresh-token", res.refreshToken);
  };
    return(
        <>
        <section>
            <h1>Results for “Web development”:</h1>
            <form>
              <input className="border py-2 px-4 " placeholder="Email" type="email"/>
              <input className="border py-2 px-4 " placeholder="password" type="password" />
              <button>Send</button>
            </form>
        </section>
        </>
    )
}