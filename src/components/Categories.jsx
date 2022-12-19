import React, { useState, useEffect } from 'react'
import axiosBase from "../api";
import { categories } from "../data/categories";
import tick from '../assets/tick.png';
import loading from '../assets/Loading.png';
import cross from '../assets/Multiply.png';
import { Link } from "react-router-dom";
export default function Categories(){

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const [clientRequests, setClientRequests] = useState();

  const getClientRequests = async () => {
    try {
      const res = await axiosBase.get(`/order/client/${user?._id}`);
      console.log('worker id: ', user?._id);
      console.log("Worker requests: ", res.data);
      setClientRequests(res.data);
      
      // console.log("requests", res.data.clientId)
      // if(res.data.clientId === user)


      // }

      //   const data = res.data.data.allDocument


    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getClientRequests();
  },  []);
    return(
        <>
<div className="flex flex-col gap-2 mt-5 ">

<h1 className='font-bold text-2xl'>Recent activity:</h1>
        <div className=' flex gap-12 overflow-x-scroll overflow-y-hidden'>

        {clientRequests?.length > 0 ? 
          <>
   {clientRequests.map((elt) =>{
    return(
      <div key={elt._id} className='flex flex-col gap-2 bg-white rounded-[15px] shadow-lg border  h-[300px] justify-center px-[24px] w-[16rem]'>
        <div className="w-full flex justify-center py-4">
        <img src={
          elt.status === 'APPROVED'? tick: elt.status === 'DECLINED'? cross: loading
        }
           alt="No icon"
            className="h-[40px] w-[45px]" />
    </div>
        {/* <h3 className="font-bold text-lg">{elt.title}</h3> */}
        <p>Status: <span className={`${elt.status === "APPROVED" ? "text-[#008000] ": elt.status === 'DECLINED'? "text-[#FF0000]" : "text-[#FFA500]"} font-bold `}> {elt.status}</span></p>
        <div className="w-full flex flex-col">
        <p>{elt.price}</p>
        <p>{elt.date}</p>
        <p>{elt.description}</p>
        </div>

      </div>
    )
   
  })

}

</>
:
<div className='flex text-center flex-col h-[300px] gap-2 border bg-white rounded-[15px] font-bold text-xl grid place-content-center shadow-lg  py-[16px]  px-[24px] w-[13rem]'>
    <h3>No records yet!</h3>
</div>
}
</div>

{/* <Link to='/activity'>
<div className='flex text-center flex-col h-[300px] gap-2 border bg-white rounded-[15px] font-bold text-xl grid place-content-center shadow-lg  py-[16px]  px-[24px] w-[13rem]'>
    <h3>View all</h3>
</div>
</Link> */}
</div>
        </>

    )
}