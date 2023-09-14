import Link from "next/link";
import React from "react";
import Image from "next/image";
import Render1 from "../asstes/images/renders1.png";
import ImageCarousel from "../components/Carousel";

const About = () => {
  return (
    <div className="">
      <div className=" bg-gray-50 dark:bg-gray-800  pb-32 h-full flex flex-col">
        <div className="flex items-center justify-center px-10 h-full mb-4 ">
          <div className="relative h-screen flex flex-col justify-center">
            <h2 className="text-3xl text-center mb-4  text-amber-500 dark:text-amber-500 ">
              Something about me!
            </h2>
            <p className=" text-center text-sm  dark:text-gray-200 text-gray-500 mb-4  ">
              Welcome to my corner of the digital universe, where the worlds of
              web development and Unity mobile game creation come together to
              inspire and innovate. I'm [Your Name], your companion on this
              exciting journey into the realms of digital creativity. In the
              ever-evolving landscape of web development, we'll explore the art
              of crafting responsive and captivating web applications. From the
              foundations of HTML and CSS to the dynamic interactivity of
              JavaScript, we'll unlock the secrets of building user-friendly
              interfaces and seamless online experiences. Whether you're a
              seasoned developer looking to stay ahead of the curve or a
              newcomer eager to grasp the basics, this space is a hub of
              knowledge and inspiration. On the Unity front, we'll dive
              headfirst into the exciting world of mobile game development.
              Together, we'll dissect Unity 3D, master the intricacies of C#,
              and explore the core principles of game design. Our goal is to
              empower you with the skills and insights needed to bring your
              gaming visions to life, from crafting captivating game mechanics
              to designing stunning visuals and immersive narratives. So,
              whether you're here to refine your expertise, find your muse, or
              simply revel in the magic of digital creation, I invite you to
              join me on this thrilling adventure. Together, we'll push the
              boundaries of innovation and creativity, one line of code at a
              time, in the enchanting worlds of web and Unity mobile game
              development.
            </p>
            <div className=" absolute w-full h-full flex justify-center items-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="0.5"
                stroke="currentColor"
                className="w-14 h-14 animate-bounce"
              >
                <path
                  stroke-linecap="round"
                  strokeLinejoin="round"
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-end md:h-screen ">
          <ImageCarousel />
        </div>
        <div className="">
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
    </div>
  );
};

export default About;
