
import Navbar from "../components/layout/Navbar";
import React, { useState, useEffect } from 'react'
import axiosBase from "../api";
import { workers } from "../data/workers";
import { categories } from "../data/categories"
import tick from '../assets/tick.png'
export default function Profile() {
  // let user = JSON.parse(localStorage.getItem("user"))

  const [user, setUser] = useState();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")))
  }, [])

  const [workerRequests, setWorkerRequests] = useState()
  useEffect(() => {
    const getWorkerRequests = async () => {
      try {
        const res = await axiosBase.get("/order");
        let test = res.data
        test.filter((tes) => {
          if (tes.clientId === user?._id) {
            setWorkerRequests(tes)
          }
        })
        // console.log("requests", res.data.clientId)
        // if(res.data.clientId === user)


        // }

        //   const data = res.data.data.allDocuments


      } catch (error) {
        console.error(error);
      }
    };
    getWorkerRequests();
  }, []);



  // console.log("user", user )
  return (
    <>
      <Navbar />

      <section className="py-44">
        <h1>Profile page</h1>

        {user?.types === "WORKER" ? <>
          <h1>Worker</h1>

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


<div className="flex   gap-10 ">
        <div className=' px-44 flex flex-wrap gap-12 '>
   {categories.map((elt) =>{
    return(
      <div className='flex flex-col gap-2 bg-white rounded-[15px] shadow-lg border  h-[250px] justify-center py-10 px-[24px] w-[15rem]'>
        <div className="w-full flex justify-center py-4">
        <img src={tick} className="h-[20px] w-[25px]" />
    </div>
        <h3 className="font-bold text-lg">{elt.title}</h3>
        <p>Status: <span className={`${elt.status === "Completed" ? "text-[#008000] ": "text-[#FFA500]"} font-bold `}> {elt.status}</span></p>
        <div className="w-full flex justify-between">
        <p>{elt.value}</p>
        <p>{elt.date}</p>
      
        </div>
        <div className="flex gap-2">
       <button className="font-bold  px-4 py-2 border border-green-300 text-green-300 rounded">Accept</button>
        <button className="px-4 py-2 rounded border border-red-500 font-bold text-red-500">Decline </button>
        </div>
      </div>
    )
   
  })

}
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