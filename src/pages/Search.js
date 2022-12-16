import Workers from "../components/Workers";
import arrowRight from '../assets/arrowRight.png'
import Navbar from "../components/layout/Navbar";
export default function Search(){
    return(
        <>
        <Navbar />
        <section className="px-28 bg-[#F3F8FA] py-36 flex flex-col gap-5">
            <h1 className="font-bold text-2xl">Results for “Web development”:</h1>
            <div className="flex items-center gap-5">
                <h3 className="text-[20px] font-bold">Suggested searches: </h3>
                <div className="flex gap-5">
                    <div className="rounded-[50px] bg-white shadow-xl border w-28 grid place-content-center font-bold  py-1 px-2">HTML CSS</div>
                    <div className="rounded-[50px] bg-white shadow-xl border w-40 grid place-content-center font-bold  py-1 px-2">Javascript dev</div>
                    <div className="rounded-[50px] bg-white shadow-xl border w-44 grid place-content-center font-bold  py-1 px-2">Web3 developer</div>
                    <div className="rounded-[50px] bg-white shadow-xl border w-24 grid place-content-center font-bold  py-1 px-2"><img src={arrowRight}/></div>
                </div>
            </div>
            <Workers />
        </section>
        </>
    )
}