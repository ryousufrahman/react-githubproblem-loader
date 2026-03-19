import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-300 mx-auto mt-5">
      <nav className="flex justify-between items-center">
        {/* navleft */}
        <div className="">
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
