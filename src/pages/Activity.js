
import Navbar from "../components/layout/Navbar";
import React, { useState, useEffect } from 'react'
import axiosBase from "../api";
import { workers } from "../data/workers";
import { categories } from "../data/categories"
import tick from '../assets/tick.png'
import loading from '../assets/Loading.png'
import cross from '../assets/Multiply.png'
import axios from "axios";
export default function Activity() {
  // let user = JSON.parse(localStorage.getItem("user")

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const [workerRequests, setWorkerRequests] = useState();

  const getWorkerRequests = async () => {
    try {
      const res = await axiosBase.get(`/order/worker/${user?._id}`);
      console.log('worker id: ', user?._id);
      console.log("Worker requests: ", res.data);
      setWorkerRequests(res.data);
      
      // console.log("requests", res.data.clientId)
      // if(res.data.clientId === user)


      // }

      //   const data = res.data.data.allDocument


    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    getWorkerRequests();
  },  []);

  const handleApprove = (id)=> {
    const res = axiosBase.post(`/order/approve/${id}`);
    console.log(res);
    getWorkerRequests();
  }

  const handleDecline = (id)=> {
    const res = axiosBase.post(`/order/decline/${id}`);
    console.log(res);
    getWorkerRequests();
  }


  // console.log("user", user )
  return (
    <>
      <Navbar />

      <section className="py-44">
        {/* <h1>Profile page</h1> */}

        {user?.types === "WORKER" ? <>
          {/* <h1>Worker</h1> */}

          {/* {workerRequests ? (
            <div>
              <p className="bg-red-500 y-5">User id: {user?._id}</p>

              <div >
                <p>{workerRequests.status}</p>
                <p>{workerRequests.clientId}</p>
                <p>{workerRequests.workerId}</p>
              </div>

            </div>
          ) : (<></>
          )} */}

<div className="flex w-full  gap-10 ">
        <div className=' px-44 w-full flex flex-wrap gap-12 '>
          {workerRequests?.length > 0 ? 
          <>
   {workerRequests.map((elt) =>{
    return(
      <div key={elt._id} className='flex flex-col gap-2 bg-white rounded-[15px] shadow-lg border  h-[350px] justify-center py-10 px-[24px] w-[16rem]'>
        <div className="w-full flex justify-center py-4">
        <img src={
          elt.status === 'APPROVED'? tick: elt.status === 'DECLINED'? cross: loading
        }
           alt="No icon"
           className="h-[40px] w-[40px]" />
    </div>
        {/* <h3 className="font-bold text-lg">{elt.title}</h3> */}
        <p>Status: <span className={`${elt.status === "APPROVED" ? "text-[#008000] ": "text-[#FFA500]"} font-bold `}> {elt.status}</span></p>
        <div className="w-full flex flex-col gap-2 ">
        <p>{elt.price}</p>
        <p>{elt.date}</p>
        <p>{elt.description}</p>
      
        </div>
        {elt.status === 'PENDING'?
        <div className="flex gap-2">
        <button onClick={()=>handleApprove(elt._id)} className="font-bold  px-4 py-2 border border-green-300 text-green-300 rounded">Accept</button>
         <button onClick={()=>handleDecline(elt._id)} className="px-4 py-2 rounded border border-red-500 font-bold text-red-500">Decline </button>
         </div>
        :<></>}
      </div>
    )
   
  })

}
</>
:
<div className="flex w-full  text-center gap-10 ">
  <h1>No activity yet recorded!</h1>
</div>}
</div>


</div>
        </>
          : <><h1>Client</h1>

          <div>

          </div>
          </>}

        {/* {localStorage.user} */}
        {/* <h1>type: {types} </h1> */}
      </section>

    </>
  )
}