import React, {useState} from 'react'
export default function Modal({worker, setOpenModal}){
    return(
        <>

       

        <div className='w-full bg-black  opacity-75 relative bottom-0 top-[-100rem] h-[100rem]  w-full'></div>

            <div className="bg-white absolute top-[35%] w-[35rem] rounded-xl left-[30%] z-50 py-20 px-16 flex flex-col gap-5 ">
                <p className='font-bold'>Information of selected employee, </p>


   
       <p className='text-[18px]'>name: <span className='text-[18px] mt-4 text-primary-blue font-bold'>{worker.name}</span></p>   
     
        <button className="bg-red-500 px-5 py-3 text-white font-bold w-24 rounded-md" onClick={() => setOpenModal(false)} >Close</button>

        
        </div>

        </>
    )
}