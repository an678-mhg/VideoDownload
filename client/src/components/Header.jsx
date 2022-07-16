import React from "react";
import { FcContacts } from "react-icons/fc";

const Header = () => {
  return (
    <div>
      <div className="container py-4 lg:px-10 border-b flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold ">AYTDL</h1>
        </div>
        <ul>
          <li className="px-2 py-1 cursor-pointer flex items-center">
            <FcContacts className="w-6 h-6 mr-1" />
            <span>Contact</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
