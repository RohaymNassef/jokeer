import React from 'react';
import "./Navbar.css";
import { FaWhatsapp } from "react-icons/fa6";
import img from "../../images/logo.png";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from 'react-router-dom';
const Navbar = () => {
  function click(){
    document.querySelector(".ul").classList.toggle("open")
  }
  function close(){
    document.querySelector(".ul").classList.remove("open")
  }
  return (
    <nav>
        <div className="navbar">
            <div className="nav-flex">
            <div className="nav-menu">
                <AiOutlineMenuUnfold className='menu' onClick={click}/>
              </div>
                <div className="nav-left">
                    <ul className='ul'>
                        <li><Link to={"https://wa.me/201097351705"} onClick={close}> 
                            <button>
                              <div class="svg-wrapper-1">
                                <div class="svg-wrapper">
                                  <FaWhatsapp className='nav-icon'/>
                                    <path
                                      d="M22,15.04C22,17.23 20.24,19 18.07,19H5.93C3.76,19 2,17.23 2,15.04C2,13.07 3.43,11.44 5.31,11.14C5.28,11 5.27,10.86 5.27,10.71C5.27,9.33 6.38,8.2 7.76,8.2C8.37,8.2 8.94,8.43 9.37,8.8C10.14,7.05 11.13,5.44 13.91,5.44C17.28,5.44 18.87,8.06 18.87,10.83C18.87,10.94 18.87,11.06 18.86,11.17C20.65,11.54 22,13.13 22,15.04Z"
                                    ></path>
                                  
                                </div>
                              </div>
                              <span>تواصل معنا</span>
                            </button>
                        </Link></li>
                        <li><Link to={"/service"} onClick={close}>شروط الخدمه</Link></li>                       
                        <li><Link to={"/anser"} onClick={close}>سؤال وجواب</Link></li>
                        <li><Link to={"/"} onClick={close}>الرئسيه</Link></li>
                    </ul>
                </div>
                <div className="nav-right">
                    <Link to={"/"}><img src={img} alt="logo" /></Link>
                </div>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
