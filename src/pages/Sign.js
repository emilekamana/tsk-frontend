import axios from "../api";
import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";

export default function Sign(){
  const [email, setEmail] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const [name, setName] = useState("");
  const onChangeName = (e) => {
    setEmail(e.target.value);
  }

  const [tyoe, setType] = useState("");
  const onChangeType = (e) => {
    setEmail(e.target.value);
  }

  const [password, setPassword] = useState("");
  const onChangePass = (e) => {
    setPassword(e.target.value);
  };

  const signUpUser = async (data) => {
    const res = await axios.post("/user/", data);
    console.log(res);
  };
    return(
        <>
        <Navbar />
        <section  className="flex flex-col items-center gap-20 py-44">
          <h1 className="text-[#3FBEA7] font-bold text-3xl">Sign up</h1>
          
            
            <form className="flex flex-col gap-3 w-1/3">
              <input placeholder="Names" type="text" className="border py-2 px-5 outline-none rounded"/>
              <input placeholder="Email" type="email" className="border py-2 px-5 outline-none rounded"/>
              <input placeholder="type" type="text" className="border py-2 px-5 outline-none rounded"/>
              <input placeholder="password" type="password" className="border py-2 px-5 outline-none rounded"/>
    <button className="bg-[#3FBEA7] py-3 text-white font-bold rounded">Send</button>
            </form>
        </section>
        </>
    )
}