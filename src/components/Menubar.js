import React from "react";
import logo from "../images/logo-1657010218.jpg";
import { IoIosSearch } from "react-icons/io";


const Menubar = () => {
  return (
    <div className="px-40 py-4 flex justify-between items-center">
      <div>
        <img src={logo} />
      </div>
      <div>
        <ul className="flex space-x-4 uppercase font-semibold">
          <li>Tables</li>
          <li> Sofas</li>
          <li>Kitchen</li>
          <li>Bedroom</li>
          <li> Chairs</li>
          <li> Contacts</li>
        </ul>
      </div>
      <div>
      <div class="flex items-center border-b border-gray-300 py-1">
    <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search" aria-label="Full name" />
   <IoIosSearch  className="text-2xl"/>
  </div>
      </div>
      <div></div>
    </div>
  );
};

export default Menubar;
