import React from "react";
import Link from "next/link";
import Carmain from "../asstes/images/maincar.webp";
import Gmail from "../asstes/images/contact/gmail.png";
import Linkedin from "../asstes/images/contact/Linkedin.png";
import Github from "../asstes/images/contact/git.png";
import Image from "next/image";
const Contact = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mb-10 sm:mb-0">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <Image
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={Carmain}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            
            
            
            
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-amber-100 text-amber-500 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="flex-shrink-0 w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Work Accounts
                </h2>

                <div className="grid grid-cols-3 border rounded-xl ">
                  <a  href="mailto:nowhere@mozilla.org"className="p-4 h-300 hover:bg-amber-100 rounded-xl">
                 
                  <Image  alt="" src={Gmail}/>
                  </a>
                  <a href="https://github.com/HisamNasir" className="p-4 h-300 hover:bg-amber-100 rounded-xl">
                  <Image alt="" src={Github}/>
                  </a>
                  <a href="https://www.linkedin.com/in/hisam-nasir-8092b4176/" className="p-4 h-300 hover:bg-amber-100 rounded-xl">
                  <Image alt="" src={Linkedin}/>
                  </a>
                </div>

              </div>
            </div>
            
            
            
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-amber-100 text-amber-500 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                  />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Playstore
                </h2>
                <p className="leading-relaxed text-base">
                  Publised Mobile 3D/2D Games developed and designed by me.
                </p>
                <a  href="https://play.google.com/store/apps/dev?id=4855749186969445813" className="mt-3 cursor-pointer  hover:scale-110 transition duration-75 hover:text-amber-800 text-amber-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>




            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-amber-100 text-amber-500 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>



              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Email Me
                </h2>
                <p className="leading-relaxed text-base">
                  In case if you want to reachout to me personally, I am always avaliable on Gmail.
                </p>
                <a    href="mailto:nowhere@mozilla.org" className="cursor-pointer hover:scale-110 transition duration-75 hover:text-amber-800 mt-3 text-amber-500 inline-flex items-center">
                  Send Email
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>


            </div>



          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
