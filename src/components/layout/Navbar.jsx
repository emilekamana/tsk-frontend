import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import user from '../../assets/user.png'
import arrow from '../../assets/arrow.png'
import hea from '../../assets/header.jpg'
import search from '../../assets/search.png'
// import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let user = JSON.parse(localStorage.getItem("user"))

  // console.log("logged in user", localStorage.user)
  // const navigate = useNavigate();

  // let [user, setState] = useState("")
  // user = localStorage.user
  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   localStorage.removeItem("token");
  //   navigate("/sign");

 
  // };
  const [pageScrolled, setpageScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 50 ? setpageScrolled(true) : setpageScrolled(false);
    }
  };
  return (
    <>
    <header className="relative  ">
    <nav className="items-center py-5 bg-black   fixed   text-white font-bold flex flex-row justify-between w-full  px-20">
      <h1>Logo</h1>
      <ul className=" flex gap-10 justify-center">
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign up</Link></li>

        {user ? <Link to="/profile">Profile</Link> : <></>}
      </ul>

      <div className="flex items-center gap-4">
        <div className=" flex gap-2 items-center">
          <p>{user.names}</p> 
          </div>
      </div>
     </nav>
      {/* <img src={hea} /> */}
    
     

     {/* <div className="absolute flex  bg-black opacity-50 h-full w-full  top-0"></div>
     <div className="flex  absolute justify-between  top-[50%] left-[35%] w-[30rem] ">
      <input placeholder="What services are you looking for?" className="relative w-[100%] outline-none border border-[#3FBEA7] rounded-md py-3 px-5 bg-white "></input>
      <img className="absolute right-4 top-2 w-8 h-8" src={search} />
     </div> */}
     
     </header>

    
     
    </>
  )
}