import Image from "next/image";
import Mainimg from "./asstes/images/maincover.jpg";
import Maincar from "./asstes/images/maincar.webp";
import Mainweb from "./asstes/images/web.jpg";
import WordLoop from "./components/WordLoop";
import Gameloop from "./components/Gameloop";
import Webloop from "./components/Webloop";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <div className="">
        <div className="">
          <div className="flex relative items-center   h-screen bg-gray-50 mb-4  overflow-hidden dark:bg-gray-800">
            <Image
              src={Mainimg}
              alt=""
              className=" absolute object-cover h-full z-10 opacity-40"
            />
            <div className="z-10 hover:scale-110 transition duration-500 flex flex-col max-md:justify-center max-md:items-center max-md:w-full md:translate-x-40 rel  text-black dark:text-gray-500">
              <h1 className=" md:text-6xl text-4xl">Hisam Nasir</h1>
              <div className="  text-amber-500 md:text-3xl text-2xl">
                <WordLoop />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex relative items-center cursor-pointer  h-80 bg-gray-50 mb-4  overflow-hidden dark:bg-gray-800">
              <Image
                src={Maincar}
                alt=""
                className="hover:scale-110 transition duration-500 absolute object-cover w-hull h-full z-10 "
              />
              <div className="z-10 hover:scale-110 transition duration-500 flex flex-col max-md:justify-center max-md:items-center max-md:w-full md:translate-x-4 rel  text-black dark:text-gray-500">
                <h1 className=" md:text-2xl text-1xl">Game Developement</h1>
                <div className="  text-amber-500 md:text-md text-sm">
                  <Gameloop />
                </div>
              </div>
            </div>
            <div className="flex relative items-center cursor-pointer h-80 bg-gray-50 mb-4  overflow-hidden dark:bg-gray-800">
              <Image
                src={Mainweb}
                alt=""
                className=" hover:scale-110 transition duration-500 absolute invert grayscale object-cover h-full w-full z-10 opacity-40"
              />
              <div className="z-10 hover:scale-110 transition duration-500 flex flex-col max-md:justify-center max-md:items-center max-md:w-full md:translate-x-4 rel  text-black dark:text-gray-500">
                <h1 className=" md:text-2xl text-1xl ">Web Developer</h1>
                <div className="  text-amber-500 md:text-md text-sm">
                  <Webloop />
                </div>
              </div>
            </div>
          </div>
          <div className=" dark:bg-gray-50 bg-gray-800 py-10 pb-32">
            <div className="flex items-center justify-center px-10 mb-4">
              <div className="">
                <h2 className="text-3xl text-center mb-4  text-amber-500 dark:text-amber-500 ">
                  Something about me!
                </h2>
                <p className=" text-center text-sm  text-gray-200 dark:text-gray-500 mb-4  ">
                  Welcome to my corner of the digital universe, where the worlds
                  of web development and Unity mobile game creation come
                  together to inspire and innovate. I'm [Your Name], your
                  companion on this exciting journey into the realms of digital
                  creativity. In the ever-evolving landscape of web development,
                  we'll explore the art of crafting responsive and captivating
                  web applications. From the foundations of HTML and CSS to the
                  dynamic interactivity of JavaScript, we'll unlock the secrets
                  of building user-friendly interfaces and seamless online
                  experiences. Whether you're a seasoned developer looking to
                  stay ahead of the curve or a newcomer eager to grasp the
                  basics, this space is a hub of knowledge and inspiration. On
                  the Unity front, we'll dive headfirst into the exciting world
                  of mobile game development. Together, we'll dissect Unity 3D,
                  master the intricacies of C#, and explore the core principles
                  of game design. Our goal is to empower you with the skills and
                  insights needed to bring your gaming visions to life, from
                  crafting captivating game mechanics to designing stunning
                  visuals and immersive narratives. So, whether you're here to
                  refine your expertise, find your muse, or simply revel in the
                  magic of digital creation, I invite you to join me on this
                  thrilling adventure. Together, we'll push the boundaries of
                  innovation and creativity, one line of code at a time, in the
                  enchanting worlds of web and Unity mobile game development.
                </p>
              </div>
            </div>
            <div className=" md:grid md:grid-cols-3 space-x-8 gap-8 px-10">
              <Link href='/about'>
                <div className="flex flex-col  hover:scale-110 transition duration-500 rounded-xl items-center justify-center p-4 dark:bg-amber-50 h-28 bg-black">
                  <p className="text-2xl text-amber-400 dark:text-amber-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </p>
                  <h1 className="text-white dark:text-black text-sm text-center leading-4">Learn more about me</h1>
                </div>
              </Link>
              <Link href='/projects'>
                <div className="flex flex-col  hover:scale-110 transition duration-500 rounded-xl items-center justify-center  dark:bg-amber-50 h-28 bg-black">
                  <p className="text-2xl text-amber-400 dark:text-amber-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clipRule="evenodd"
                      />
                      <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                    </svg>
                  </p>
                  <h1 className="text-white dark:text-black text-sm text-center leading-4">See my projects</h1>
                </div>
              </Link>
              <Link href='/contact'>
                <div className="flex flex-col rounded-xl  hover:scale-110 transition duration-500 items-center justify-center  dark:bg-amber-50 h-28 bg-black">
                  <p className="text-2xl text-amber-400 dark:text-amber-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </p>
                  <h1 className="text-white dark:text-black text-sm text-center leading-4">Contact Me</h1>
                </div>
              </Link>
            </div>
            
          </div>
          
        </div>

      </div>
    </main>
  );
}
