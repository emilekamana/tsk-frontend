import { services } from "../data/services"
import tick from '../assets/tick.png'
import job from '../assets/job.png'
export default function Services(){
    return(
        <>
        <section className="py-20">
        <h1 className="font-bold text-2xl py-5">Browse different categories of services:</h1>
<div className="flex gap-10  ">
        <div className=' flex gap-12 '>
   {services.map((elt) =>{
    return(
      <div className='relative flex flex-col job gap-2 rounded-[10px]  h-[400px] justify-center  w-[18rem]'>
        <div className="px-[24px] flex flex-col justify-around h-full py-10" >
        <h3 className="font-bold text-xl text-white">{elt.title}</h3>
        <p className="font-bold text-lg text-white">{elt.description}</p>
    </div>

    <div className="absolute w-full rounded-[10px] opacity-25  bg-black h-full "></div>
       
        

      </div>
    )
   
  })

}
</div>


</div>
</section>
        </>

    )
}