import { workers } from "../data/workers"
import tick from '../assets/tick.png'
import job from '../assets/job.png'
import user from '../assets/user.png'
import Modal from "./modal/Modal"
import axiosBase from "../api"
import React, {useState, useEffect} from 'react'
export default function Workers(){

    const [workers, setWorkers] = useState();
  const [openModal, setOpenModal] = useState(false)

    const [selectedWorker,setSelectedWorker] = useState(null)
    const handleProfile = (worker) => {
        setSelectedWorker(worker)
    setOpenModal(true)

        console.log(selectedWorker)
    
      }
    useEffect(() => {
      const getWorkers = async () => {
        try {
          const res = await axiosBase.get("/worker");
          console.log("resr", res.data)
            setWorkers(res.data)
  
        //   const data = res.data.data.allDocuments

  
        } catch (error) {
          console.error(error);
        }
      };
      getWorkers();
    }, []);
  
  
    return(
        <>

        {workers ? (
            <div className="flex gap-10 py-4 ">
                {workers.map((worker, index) => {
                    return (
                        <div key={index} className="rounded-xl w-[18rem] border shadow-xl ">
                            <img src={worker?.image?.secure_url} className="w-full h-[20vh]" />
                            <div className="flex flex-col gap-1 px-5 py-5 bg-white border rounded-t-[30px]">
                           <div className="flex gap-2 items-center"> <img src={user} className="w-12 h-12" /> <p className="">{worker.names}</p> </div>
                            <p className="px-10">{worker.longBio}</p>
                            <button onClick={()=> handleProfile(worker)} className="border border-[#3FBEA7] rounded text-[#3FBEA7] font-bold py-3 px-6" >View Profile</button>


                            </div>
                            </div>
                    )
                })}
            </div>
         ) : (
            <h1>No worker</h1>
          )}

{openModal && <Modal worker={selectedWorker} setOpenModal={setOpenModal} />}

    
        </>

    )
}