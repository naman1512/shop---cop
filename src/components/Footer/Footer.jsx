// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaGithub, FaMobileAlt} from "react-icons/fa";
import {
  FaLinkedin,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl
"
            >
              SHOP & COP
            </a>
            <p className="text-gray-600 dark:text-white/70  lg:pr-24 pt-3">
              The Project is developed as an assignment for Avataar.ai
            </p>
            <p className="text-gray-500 mt-4">
             Created By Naman Bhatt <br/> 2k20/ME/163
            </p>
            <a
              href= 'https://naman-bhatt-developer-portfolio.vercel.app/'
              target="_blank"
              className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full" rel="noreferrer"
            >
              Visit My Portfolio
            </a>
          </div>
    

            {/* CANDIDATE INFORMATION*/}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">CANDIDATE INFORMATION</h1>
              <div>
                <div className="flex items-center gap-3">
              <MdEmail/>
                  <p>namanbhatt_me20a9_73@dtu.ac.in</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+91 9899759602</p>
                </div>

                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaGithub className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="https://www.linkedin.com/in/naman-bhatt-7881581b1/">
                    <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default Footer;
