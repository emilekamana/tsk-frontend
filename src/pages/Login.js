import axios from "../api";
import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import { useNavigate } from "react-router-dom";
export default function Login(){
  const [email, setEmail] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }
const navigate = useNavigate()
  const [password, setPassword] = useState("");
  const onChangePass = (e) => {
    setPassword(e.target.value);
  };

  const loginUser = async (data) => {
    const res = await axios.post("/auth/login", data);
    console.log(res.data);
    localStorage.setItem("user", JSON.stringify(res.data.user) );
    localStorage.setItem("acess-token", res.data.accessToken );
    localStorage.setItem("refresh-token", res.data.refreshToken);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      email: email,
      password: password,
    };
    setEmail("");
    setPassword("");
    try {
      await loginUser(loginData);
      navigate("/body");
    } catch (error) {
      // setErr(error?.response?.data?.errors || error.message);
    }
  };
    return(
        <>
        <Navbar />
          <section  className="flex flex-col items-center gap-20 py-44">
          <h1 className="text-[#3FBEA7] font-bold text-3xl">Login</h1>
          
            
            <form className="flex flex-col gap-3 w-1/3">
              <input placeholder="Email" type="email" name="email" onChange={onChangeEmail} className="border py-2 px-5 outline-none rounded"/>
              <input placeholder="password" type="password" name="password" onChange={onChangePass} className="border py-2 px-5 outline-none rounded"/>
    <button className="bg-[#3FBEA7] py-3 text-white font-bold rounded" type="submit" onClick={(e) => onSubmit(e)}>Send</button>
            </form>
        </section>
        </>
    )
}