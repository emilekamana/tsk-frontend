import React, { useState } from 'react'
import axios from 'axios';
import axiosBase from '../../api';
export default function Modal({ worker, setOpenModal }) {
    let user = JSON.parse(localStorage.getItem("user"))
    const [description, setDescription] = useState("");
    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    };


  
    const giveOrder = async (data) => {
      console.log(data);
      const res = await axiosBase.post("/order", data);
      console.log(res.data);

      
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const regData = {
          description: description,
          status : "PENDING",
          date: Date.now(),
          clientId:  user._id,
          workerId: worker.userId

        };
        giveOrder(regData);
        setDescription("")
        console.log(regData);
        setOpenModal(false);

    
      };
    return (
        <>



            <div className='w-full bg-black  opacity-75 absolute left-0 bottom-0 top-[-100rem] h-[200rem]  w-full'></div>

            <div className="bg-white absolute top-[5%] w-[35rem] rounded-xl left-[30%] z-50 py-10 px-16 flex flex-col gap-5 ">
                <p className='font-bold'>Information of selected employee, </p>

                <button className="bg-red-500 absolute top-5 right-5 px-5 py-3 text-white font-bold w-24 rounded-md" onClick={() => setOpenModal(false)} >Close</button>

                <p>{worker.price}</p>
                <p>{worker.shortBio}</p>
                <p>{worker.longBio}</p>



                <p className='text-[18px]'>name: <span className='text-[18px] mt-4 text-primary-blue font-bold'>{worker.names}</span></p>
                <div><p className="font-bold">Skilled in:</p>{worker.tags.map((tag) => {
                    return (
                        <p>{tag}</p>
                    )
                })}</div>
                <form>
                    <textarea className='h-44 w-full border rounded outline-none p-4' name="description" onChange={onChangeDescription} type="" placeholder='Work message here ......' ></textarea>
                    <button className='bg-yellow-500 py-2 px-5 text-white font-bold rounded' onClick={(e) => onSubmit(e)}>Send request</button>
                </form>


            </div>

        </>
    )
}