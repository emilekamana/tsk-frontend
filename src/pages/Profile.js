import Navbar from "../components/layout/Navbar";
import React, {useState, useEffect} from 'react'
import axiosBase from "../api";
import { workers } from "../data/workers";
export default function Profile(){
    const [workerRequests, setWorkerRequests]  = useState()
    useEffect(() => {
        const getWorkerRequests = async () => {
          try {
            const res = await axiosBase.get("/order");
            console.log("requests", res.data.workedId)
            setWorkerRequests(res.data)
    
          //   const data = res.data.data.allDocuments
  
    
          } catch (error) {
            console.error(error);
          }
        };
        getWorkerRequests();
      }, []);
    let user = JSON.parse(localStorage.getItem("user"))
    // console.log("user", user )
    return(
        <>
<Navbar />

<section className="py-44">
<h1>Profile page</h1>

{user.types = "WORKER" ? <>
<h1>Worker</h1>

{workerRequests ? (
    <div>
      <p className="bg-red-500 y-5">User id: {user._id}</p>  
        {workerRequests.map((request, index) => {
            console.log("request", request)
            return(
                <div key={index}>
                    <p>{request.status}</p>
                    <p>{request.clientId}</p>
                    <p>{request.workerId}</p>
                    </div>
            )
        })}
    </div>
):(<></>
)}
</> 
: <><h1>Client</h1></>}

{/* {localStorage.user} */}
{/* <h1>type: {types} </h1> */}
</section>
        
        </>
    )
}