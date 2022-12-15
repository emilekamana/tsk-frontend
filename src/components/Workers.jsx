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
          console.log(res.data)
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
            <div>
                {workers.map((worker, index) => {
                    return (
                        <div key={index}>
                            <p>{worker.name}</p>
                            <p>{worker.longBio}</p>
                            <img src={worker.image.secure_url} />
                            <button onClick={()=> handleProfile(worker)} className="bg-red-500 text-white font-bold py-3 px-6" >View Profile</button>
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