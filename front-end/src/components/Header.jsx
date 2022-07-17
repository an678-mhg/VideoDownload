import React from "react";
import { FcContacts } from "react-icons/fc";
import { BsGithub, BsFacebook } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";

const Header = () => {
  return (
    <div>
      <div className="container py-4 lg:px-10 border-b flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold ">AYTDL</h1>
        </div>
        <ul className="relative menu">
          <li className="px-2 py-1 cursor-pointer flex items-center">
            <FcContacts className="w-6 h-6 mr-1" />
            <span>Contact</span>

            <div className="absolute top-[30px] bg-[#2c3e50] shadow-md px-4 rounded-md child right-0 ">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/an70008/"
                className="flex items-center border-b p-2"
              >
                <BsFacebook className="w-6 h-6 text-blue-600 mr-2" />
                <span className="">Facebook</span>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/an678-mhg"
                className="flex items-center border-b p-2"
              >
                <BsGithub className="w-6 h-6 mr-2" />
                <span className="">Github</span>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCJeY2ZgtRzY3NSiLZYu9ddg"
                className="flex items-center p-2"
              >
                <AiOutlineYoutube className="w-6 h-6 text-red-600 mr-2" />
                <span className="">Youtube</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
