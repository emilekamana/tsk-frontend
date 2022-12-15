import { categories } from "../data/categories"
import tick from '../assets/tick.png'
export default function Categories(){
    return(
        <>
<div className="flex gap-10 ">
        <div className=' flex gap-12 '>
   {categories.map((elt) =>{
    return(
      <div className='flex flex-col gap-2 bg-white rounded-[15px] shadow-lg border  h-[200px] justify-center px-[24px] w-[13rem]'>
        <div className="w-full flex justify-center py-4">
        <img src={tick} className="h-[20px] w-[25px]" />
    </div>
        <h3 className="font-bold text-lg">{elt.title}</h3>
        <p>Status: <span className={`${elt.status === "Completed" ? "text-[#008000] ": "text-[#FFA500]"} font-bold `}> {elt.status}</span></p>
        <div className="w-full flex justify-between">
        <p>{elt.value}</p>
        <p>{elt.date}</p>
        </div>

      </div>
    )
   
  })

}
</div>

<div className='flex flex-col h-[200px] gap-2 border bg-white rounded-[15px] font-bold text-xl grid place-content-center shadow-lg  py-[16px]  px-[24px] w-[13rem]'>
    <h3>View all</h3>
</div>
</div>
        </>

    )
}