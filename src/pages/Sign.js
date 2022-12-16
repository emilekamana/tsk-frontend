import axios from "../api";
import React, { useState } from "react";

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
        <section>
            <h1>Results for “Web development”:</h1>
        </section>
        </>
    )
}