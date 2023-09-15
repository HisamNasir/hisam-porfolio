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


    </div>
  )
}

export default Projects