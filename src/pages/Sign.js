import axios from "../api";
import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";

export default function Sign(){
  const [email, setEmail] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const [names, setNames] = useState("");
  const onChangeNames = (e) => {
    setNames(e.target.value);
  }

  const [types, setTypes] = useState("");
  const onChangeTypes = (e) => {
    setTypes(e.target.value);
  }

  const [password, setPassword] = useState("");
  const onChangePass = (e) => {
    setPassword(e.target.value);
  };

  const signUpUser = async (data) => {
    console.log(data);
    const res = await axios.post("/user", data);
    console.log(res.data);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const regData = {
      names: names,
      types: types,
      password: password,
      email: email,
    };
    signUpUser(regData);
    // console.log(regData);
    setEmail("");
    setNames("");
    setPassword("");
    setTypes("");
    // navigate('/login')

  };
    return(
        <>
        <Navbar />
        <section  className="flex flex-col items-center gap-20 py-44">
          <h1 className="text-[#3FBEA7] font-bold text-3xl">Sign up</h1>
          
            
            <form className="flex flex-col gap-3 w-1/3">
              <input placeholder="Names" type="text" name="names" onChange={onChangeNames} className="border py-2 px-5 outline-none rounded"/>
              <input placeholder="Email" type="email" name="email" onChange={onChangeEmail} className="border py-2 px-5 outline-none rounded"/>
              <input placeholder="type" type="text" name="types" onChange={onChangeTypes} className="border py-2 px-5 outline-none rounded"/>
              <input placeholder="password" type="password" name="password" onChange={onChangePass} className="border py-2 px-5 outline-none rounded"/>
    <button className="bg-[#3FBEA7] py-3 text-white font-bold rounded" onClick={(e) => onSubmit(e)} type="submit">Send</button>
            </form>
        </section>
        </>
    )
}