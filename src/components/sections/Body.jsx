import Categories from "../Categories"
import Services from "../Services"
import Signup from "../Signup"
export default function Body(){
    return(
        <>
        <section className="bg-[#F3F8FA] px-[80px] w-full">
        <h1 className="font-bold text-xl  py-5">Recent Activity</h1>
            <Categories />
            <Services />
            <Signup />
       
        </section>
        </>
    )
}