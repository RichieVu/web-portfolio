"use client";

import Head from "next/head";
import {
  BsFillMoonStarsFill,
  BsMemory,
  BsPhone,
  BsFileText,
  BsEnvelopeAt,
} from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import pfp from "/public/pfp.jpg";
import connect4 from "/public/connect4.png";
import anime from "/public/anime.png";
import anime_demo from "/public/anime_demo.gif";
import { useState } from "react";
import c from "../app/assets/c.png";
import cpp from "/app/assets/cpp.png";
import css from "/app/assets/css.png";
import haskell from "/app/assets/haskell.png";
import html from "/app/assets/html.png";
import java from "/app/assets/java.png";
import javascript from "/app/assets/javascript.png";
import python from "/app/assets/python.png";
import react from "/app/assets/react.png";
import sql from "/app/assets/sql.png";
import tailwind from "/app/assets/tailwind.png";
import typescript from "/app/assets/typescript.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "" : "dark"}>
      <Head>
        <title>Richie Vu Portfolio</title>
      </Head>

      <main className="bg-white px-10 md:px20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-lato dark:text-gray-50">
              Richie Vu 2023
            </h1>
            <ul className="flex items-center">
              <li className="dark:text-gray-50">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl hover:text-teal-500"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-700 to-teal-700 text-white px-4 py-2 rounded-md ml-8"
                  href="https://drive.google.com/file/d/1Hq81v9vn9Gm_1oFpsITaEKZ-WWvgeyAp/view?usp=sharing"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-black dark:text-white font-medium">
              Hi, I&apos;m
              <span className="text-teal-600 dark:text-teal-500"> Richie</span>
            </h2>
            <h3 className="text-2xl pt-2 dark:text-gray-50">
              Software Developer
            </h3>
            <h4 className="text-1xl pb-2 dark:text-gray-50">(Pending)</h4>
            <p className="text-lg pt-6 leading-6 text-gray-900 dark:text-gray-200">
              I am a recent Computer Science Graduate from the
              <span className="text-teal-600 dark:text-teal-500">
                {" "}
                University of California Santa Cruz.
              </span>
            </p>
            <p className="text-lg pt-2 pb-6 leading-6 text-gray-900 dark:text-gray-200">
              Let&apos;s work together!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-800 dark:text-gray-300">
            <a href="https://www.linkedin.com/in/richie-vu/" target="_blank">
              <AiFillLinkedin className="hover:text-teal-500" />
            </a>
            <a href="https://github.com/RichieVu" target="_blank">
              <AiFillGithub className="hover:text-teal-500" />
            </a>
            <a href="mailto:rpvu@ucsc.edu" target="_blank">
              <BsEnvelopeAt className="hover:text-teal-500" />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden mt-16 mb-16 md:h-96 md:w-96">
            <Image src={pfp} layout="fill" objectFit="cover" alt={""} />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 font-semibold text-teal-500">
              Projects
            </h3>
            <p className="text-lg py-2 leading-8 text-gray-800 dark:text-gray-300">
              The best way to
              <span className="text-teal-500"> grow </span>
              is to
              <span className="text-teal-500"> do. </span>
              These are some of the fun things I&apos;ve built!
            </p>
          </div>

          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <div className="justify-center flex">
                <BsFileText className="text-8xl" />
              </div>
              <h3 className="text-2xl font-medium pt-8 pb-2 text-teal-500">
                Spotify Jamtop
              </h3>
              <p className="pt-5">
                Jamtop is brings the Spotify Jam functionality to desktop. Users
                can host their own room and listen to along with friends. Join a
                synchronized playlist where everyone can add their own songs.
              </p>
              <p className="pb-10">
                Built using Node.js, Javascript, Express, Socket.io and Spotify
                Api.
              </p>
              <a
                className="bg-gradient-to-r from-cyan-700 to-teal-700 text-white px-4 py-2 rounded-md"
                href="https://github.com/RichieVu/Jamtop"
                target="_blank"
              >
                View on Github
              </a>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <div className="justify-center flex">
                <Image src={anime} width={75} height={75} alt={""} />
              </div>
              <h3 className="text-2xl font-medium pt-8 pb-2 text-teal-500">
                AI Anime Recommender
              </h3>
              <div className="justify-center flex">
                <Image
                  src={anime_demo}
                  width={500}
                  height={500}
                  alt={""}
                  unoptimized={true}
                  className="border-4 border-slate-800"
                />
              </div>
              <p className="pt-5">
                Get recommended anime based on your favorite genres or find an
                anime similar to one you&apos;ve watched!.
              </p>
              <p className="pb-8">
                Built using Next.js, CSS, and OpenAI GPT-3 Api.
              </p>
              <a
                className="bg-gradient-to-r from-cyan-700 to-teal-700 text-white px-4 py-2 rounded-md"
                href="https://github.com/RichieVu/anime-recommender-openai"
                target="_blank"
              >
                View on Github
              </a>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <div className="justify-center flex">
                <BsFileText className="text-8xl" />
              </div>
              <h3 className="text-2xl font-medium pt-8 pb-2 text-teal-500">
                Portfolio Website
              </h3>
              <p className="pt-5">
                My own portfolio website. You&apos;re looking at it now!
              </p>
              <p className="pb-10">Built using React and Tailwind CSS.</p>
              <a
                className="bg-gradient-to-r from-cyan-700 to-teal-700 text-white px-4 py-2 rounded-md"
                href="https://github.com/RichieVu/web-portfolio"
                target="_blank"
              >
                View on Github
              </a>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <div className="justify-center flex">
                <Image src={connect4} width={100} height={100} alt={""} />
              </div>
              <h3 className="text-2xl font-medium pt-8 pb-2 text-teal-500">
                Connect Four
              </h3>
              <p className="pt-5">
                A computer opponent for Connect Four using DFS with a 2-player
                version.
              </p>
              <p className="pb-10">Built using Python and Pygame.</p>
              <a
                className="bg-gradient-to-r from-cyan-700 to-teal-700 text-white px-4 py-2 rounded-md"
                href="https://github.com/RichieVu/Connect-Four-DFS"
                target="_blank"
              >
                View on Github
              </a>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <div className="justify-center flex">
                <BsPhone className="text-8xl" />
              </div>
              <h3 className="text-2xl font-medium pt-8 pb-2 text-teal-500">
                Online Messaging Mobile App
              </h3>
              <p className="pt-5">
                A messaging application that displays, adds, and modifies
                messages from an online api.
              </p>
              <p className="pb-8">
                Built 3 times using Kotlin, Swift, and React respectively.
              </p>
              <p>
                <span className="text-teal-500 text-lg">
                  {" "}
                  Available Upon Request{" "}
                </span>
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <div className="justify-center flex">
                <BsMemory className="text-8xl" />
              </div>
              <h3 className="text-2xl font-medium pt-8 pb-2 text-teal-500">
                Concurrency and Synchronization Demonstration
              </h3>
              <p className="pt-5">
                A demonstration of concepts of computer systems design
                including:
              </p>
              <ul className="list-inside list-disc pb-8">
                <li className="text-teal-500">
                  <span className="text-black">POSIX Systems</span>
                </li>
                <li className="text-teal-500">
                  <span className="text-black">Concurrency Primatives</span>
                </li>
                <li className="text-teal-500">
                  <span className="text-black">CPU Scheduling Algorithms</span>
                </li>
                <li className="text-teal-500">
                  <span className="text-black">Memory Management</span>
                </li>
                <li className="text-teal-500">
                  <span className="text-black">
                    File Systems and Mass Storage
                  </span>
                </li>
              </ul>
              <p>
                <span className="text-teal-500 text-lg">
                  {" "}
                  Available Upon Request{" "}
                </span>
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="pb-2">
            <h3 className="text-3xl py-1 font-semibold text-teal-500">
              Skills
            </h3>
            <p className="text-lg py-2 leading-8 text-gray-800 dark:text-gray-300">
              The best way to
              <span className="text-teal-500"> do </span>
              is to
              <span className="text-teal-500"> learn. </span>
              These are some of the skills I&apos;ve acquired!
            </p>
          </div>

          <div className="max-w-[1000px] mx-auto pb-4 flex flex-col justify-center w-full h-full">
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
              <div className="rounded-lg py-2 shadow-md dark:shadow-gray-600 hover:scale-110 duration-500">
                <Image
                  src={react}
                  className="mx-auto w-20"
                  alt={"React Icon"}
                />
                <p className="my-4 text-lg text-gray-800 dark:text-gray-300">
                  React
                </p>
              </div>
              <div className="rounded-lg py-2 shadow-md dark:shadow-gray-600 hover:scale-110 duration-500">
                <Image
                  src={tailwind}
                  className="mx-auto w-20"
                  alt={"Tailwind Icon"}
                />
                <p className="my-4 text-lg text-gray-800 dark:text-gray-300">
                  Tailwind
                </p>
              </div>
              <div className="rounded-lg py-2 shadow-md dark:shadow-gray-600 hover:scale-110 duration-500">
                <Image
                  src={javascript}
                  className="mx-auto w-20"
                  alt={"Javascript Icon"}
                />
                <p className="my-4 text-lg text-gray-800 dark:text-gray-300">
                  Javascript
                </p>
              </div>
              <div className="rounded-lg py-2 shadow-md dark:shadow-gray-600 hover:scale-110 duration-500">
                <Image src={css} className="mx-auto w-20" alt={"CSS Icon"} />
                <p className="my-4 text-lg text-gray-800 dark:text-gray-300">
                  CSS
                </p>
              </div>
              <div className="rounded-lg py-2 shadow-md dark:shadow-gray-600 hover:scale-110 duration-500">
                <Image
                  src={python}
                  className="mx-auto w-20"
                  alt={"Python Icon"}
                />
                <p className="my-4 text-lg text-gray-800 dark:text-gray-300">
                  Python
                </p>
              </div>
              <div className="rounded-lg py-2 shadow-md dark:shadow-gray-600 hover:scale-110 duration-500">
                <Image src={sql} className="mx-auto w-20" alt={"Sql Icon"} />
                <p className="my-4 text-lg text-gray-800 dark:text-gray-300">
                  SQL
                </p>
              </div>
              <div className="rounded-lg py-2 shadow-md dark:shadow-gray-600 hover:scale-110 duration-500">
                <Image src={cpp} className="mx-auto w-20" alt={"Cpp Icon"} />
                <p className="my-4 text-lg text-gray-800 dark:text-gray-300">
                  C++
                </p>
              </div>
              <div className="rounded-lg py-2 shadow-md dark:shadow-gray-600 hover:scale-110 duration-500">
                <Image src={java} className="mx-auto w-20" alt={"Java Icon"} />
                <p className="my-4 text-lg text-gray-800 dark:text-gray-300">
                  Java
                </p>
              </div>
              <div className="rounded-lg py-2 shadow-md dark:shadow-gray-600 hover:scale-110 duration-500">
                <Image
                  src={haskell}
                  className="mx-auto w-20"
                  alt={"Haskell Icon"}
                />
                <p className="my-4 text-lg text-gray-800 dark:text-gray-300">
                  Haskell
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
