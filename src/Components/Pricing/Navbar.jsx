import { CircleX, Menu } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
    const [open, setOpen]= useState(false)
  return (
    <div className="md:max-w-300 md:mx-auto mt-5 p-3">
      <nav className="flex justify-between items-center mb-10">
        {/* navleft */}
        <div className="flex gap-4 items-center  ">
           <div  onClick={()=>setOpen(!open)}>
               {
                open?<CircleX className="md:hidden"></CircleX>  : <Menu className="md:hidden "></Menu>
               }
           
           </div>
            <ul className={`md:hidden absolute  ${open?'top-17 p-4':'hidden'}`}>
            <li className="">
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
            
          <h1 className="text-5xl text-primary hidden md:block">NAVBAR</h1>
          <div>
            
          </div>
        </div>
        <div>
          <ul className="md:flex hidden gap-4">
            <li className="">
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
        <div>
          <button className=" btn btn-primary">Subscribe</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
