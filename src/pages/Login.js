import axios from "../api";
import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";

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
        <Navbar />
          <section  className="flex flex-col items-center gap-20 py-44">
          <h1 className="text-[#3FBEA7] font-bold text-3xl">Login</h1>
          
            
            <form className="flex flex-col gap-3 w-1/3">
              <input placeholder="Email" type="email" className="border py-2 px-5 outline-none rounded"/>
              <input placeholder="password" type="password" className="border py-2 px-5 outline-none rounded"/>
    <button className="bg-[#3FBEA7] py-3 text-white font-bold rounded">Send</button>
            </form>
        </section>
        </>
    )
}