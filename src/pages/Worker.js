import axios from "../api";
import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";

export default function Sign(){
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("user: ", user);
  const [shortBio, setShortBio] = useState("");
  const onChangeShortBio = (e) => {
    setShortBio(e.target.value);
  }

  const [file, setFile] = useState(null);
  const onChangeFile = (e) => {
    setFile(e.target.file[0]);
  }

  const [names, setNames] = useState("");
  const onChangeNames = (e) => {
    setNames(e.target.value);
  }

  const [longBio, setLongBio] = useState("");
  const onChangeLongBio = (e) => {
    setLongBio(e.target.value);
  }

  const [price, setPrice] = useState("");
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const createWorker = async (data) => {
    console.log(data);
    const res = await axios.post("/worker", data);
    console.log(res.data);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const regData = {
      names: names,
      longBio: longBio,
      userId: user._id,
      price: price,
      shortBio: shortBio,
      file: file,
    };
    createWorker(regData);
    // console.log(regData);
    setShortBio("");
    setNames("");
    setPrice("");
    setLongBio("");
    // navigate('/login')

  };
    return(
        <>
        <Navbar />
        <section  className="flex flex-col items-center gap-20 py-44">
          <h1 className="text-[#3FBEA7] font-bold text-3xl">Worker info</h1>
          
            
            <form className="flex flex-col gap-3 w-1/3">
              <input placeholder="Display name" type="text" name="names" onChange={onChangeNames} className="border py-2 px-5 outline-none rounded"/>
              <input placeholder="Short bio" type="text" name="shortBio" onChange={onChangeShortBio} className="border py-2 px-5 outline-none rounded"/>
              <input placeholder="Long bio" type="text" name="longBio" onChange={onChangeLongBio} className="border py-2 px-5 outline-none rounded"/>
              <input placeholder="price" type="price" name="price" onChange={onChangePrice} className="border py-2 px-5 outline-none rounded"/>
              <input placeholder="price" type="file" name="file" onChange={onChangeFile} className="border py-2 px-5 outline-none rounded"/>
    <button className="bg-[#3FBEA7] py-3 text-white font-bold rounded" onClick={(e) => onSubmit(e)} type="submit">Send</button>
            </form>
        </section>
        </>
    )
}