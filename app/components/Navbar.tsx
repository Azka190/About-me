import React from "react";
import Hero from "./Hero";

function Navbar() {
  return (
    <div className="text-[#C7C3C3] flex flex-col">
      <div>
        <ul className="flex gap-7  float-right mt-9 mr-20 ">
        <a href="">
          <li className="cursor-pointer hover:text-white hover:underline transition duration-300 ease-in-out">
            Home
          </li>
          </a>
          <a href="/About">
            <li className="cursor-pointer hover:text-white hover:underline transition duration-300 ease-in-out">
              About
            </li>
          </a>
          <a
            href="https://drive.google.com/file/d/1VcfdVC6-jSla5YO4dqss7iZpqSW3oaY5/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="cursor-pointer hover:text-white hover:underline transition duration-300 ease-in-out">
              Resume
            </li>
          </a>

          <a href="mailto:azkadeveloper01@gmail.com">
            <li className="cursor-pointer hover:text-white hover:underline transition duration-300 ease-in-out">
              Email
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/azka-rehman462"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="cursor-pointer hover:text-white hover:underline transition duration-300 ease-in-out">
              LinkedIn
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
