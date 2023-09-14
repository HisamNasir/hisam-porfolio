import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import ImageCarousel from "../components/Carouselmain";
const Projects = () => {
  return (
    <div>
              <div className="flex justify-center items-end h-[300px] md:h-screen">
          <ImageCarousel />
        </div>


        <div className=" mb-40">
          <h1 className="bg-black text-amber-500 p-10 text-center text-6xl font-bold">
            Project Highlights
          </h1>
          <div className=" md:grid md:grid-cols-2 gap-6 m-4 max-md:space-y-3 text-center h-full md:h-[500px]">
            <Link
              href={"https://github.com/HisamNasir/OpenGL-Animation"}
              className="bg-black rounded-3xl opacity-90 hover:opacity-100 cursor-pointer h-full w-full text-white flex flex-col justify-center text-4xl font-bold max-md:p-14"
            >
              <Image />
              <h1>Open GL Animation</h1>
            </Link>
            <Link
              href={"https://github.com/HisamNasir/PCMC-Final"}
              className="bg-amber-500 rounded-3xl opacity-90 hover:opacity-100  cursor-pointer h-full w-full text-black flex flex-col justify-center text-4xl font-bold max-md:p-14"
            >
              <Image />
              <h1>
                Flutter Remote Desktop <br /> App
              </h1>
            </Link>
            <Link
              href={"https://github.com/HisamNasir/AH-Web-Demo"}
              className="bg-amber-500 rounded-3xl opacity-90 hover:opacity-100 cursor-pointer  h-full w-full text-black flex flex-col justify-center text-4xl font-bold max-md:p-14"
            >
              <Image />
              <h1>Next.JS Webapp Frontend</h1>
            </Link>
            <Link
              href={
                "https://play.google.com/store/apps/details?id=com.hn.indiantruck"
              }
              className="bg-black rounded-3xl opacity-90 hover:opacity-100 cursor-pointer h-full w-full text-white flex flex-col justify-center text-4xl font-bold  max-md:p-14"
            >
              <Image />
              <h1>Publised Games</h1>
            </Link>
          </div>
        </div>

        <div className="fixed bottom-0 border-t-2 z-40 bg-white sm:hidden w-full grid grid-cols-4 p-4 ">
          <div>
            <Link
              href="/"
              className="flex flex-col items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-amber-400 dark:hover:bg-gray-700 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              <span className="ml-3">Home</span>
            </Link>
          </div>
          <div>
            <Link
              href="/about"
              className="flex flex-col items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-amber-400 dark:hover:bg-gray-700 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>

              <span className="flex-1 ml-3 whitespace-nowrap">About</span>
            </Link>
          </div>
          <div>
            <Link
              href="/projects"
              className="flex flex-col items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-amber-400 dark:hover:bg-gray-700 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                />
              </svg>

              <span className="flex-1 ml-3 whitespace-nowrap">Projects</span>
            </Link>
          </div>
          <div>
            <Link
              href="/contact"
              className="flex flex-col items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-amber-400 dark:hover:bg-gray-700 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                />
              </svg>

              <span className="flex-1 ml-3 whitespace-nowrap">Contact</span>
            </Link>
          </div>
        </div>


    </div>
  )
}

export default Projects