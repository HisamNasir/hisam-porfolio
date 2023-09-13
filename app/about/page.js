import Link from "next/link";
import React from "react";
import Image from "next/image";
import Render1 from '../asstes/images/renders1.png'
const About = () => {
  return (
    <div className="h-screen">

      <div className=" bg-gray-50 dark:bg-gray-800  pb-32 h-full flex flex-col justify-center">
        <div className="flex items-center justify-center px-10 mb-4 ">
          <div className="">
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
          </div>
        </div>




        <div id="default-carousel" className="relative " data-carousel="slide">
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image src={Render1} alt=""/>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image  src={Render1} alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image  src={Render1} alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image  src={Render1} alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image  src={Render1} alt="..."/>
        </div>
    </div>
    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>

















      </div>
    </div>
  );
};

export default About;
