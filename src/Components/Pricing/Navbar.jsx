import { CircleX, Menu } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
    const [open, setOpen]= useState(false)
  return (
    <div className="max-w-300 mx-auto mt-5">
      <nav className="flex justify-between items-center">
        {/* navleft */}
        <div className="flex gap-4 items-center  ">
           <div  onClick={()=>setOpen(!open)}>
               {
                open?<CircleX className="md:hidden"></CircleX>  : <Menu className="md:hidden " ></Menu>
             }
           
           </div>
            
          <h1 className="text-5xl text-primary">NAVBAR</h1>
          <div>
            
          </div>
        </div>
        <div>
          <ul className="flex gap-4">
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
