import job from "../assets/job.png"
export default function Signup(){
    return(
        <>
        <section className="flex justify-between py-20 ">
            <div className="flex flex-col gap-5 justify-center items-center">
                <p className="w-5/6 text-center text-lg">Sign up as a worker to start offering your services
on the platform</p>
<button className="bg-[#3FBEA7] shadow-xl text-white font-bold text-xl rounded-md py-3 px-6 w-44">Sign up</button>

            </div>
            <div>
                <img src={job} />

            </div>
        </section>
        </>

    )
}