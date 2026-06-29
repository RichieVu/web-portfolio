"use client";

import Head from "next/head";
import {
  BsFillMoonStarsFill,
  BsEnvelopeAt,
  BsArrowUpRight,
  BsFileEarmarkPdf,
  BsTelephone,
  BsGeoAlt,
  BsCheck2Square,
  BsSuitHeart,
  BsCameraVideo,
  BsBook,
} from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Richie Vu | Portfolio</title>
        <meta name="description" content="Full Stack Data Scientist" />
      </Head>

      <main className="relative bg-slate-50 text-slate-800 dark:bg-[#0B1120] dark:text-slate-300 min-h-screen transition-colors duration-500 font-sans selection:bg-teal-300 selection:text-teal-900 overflow-hidden">
        {/* Ambient Background Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-400/20 dark:bg-teal-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        {/* Navigation */}
        <nav className="relative z-10 max-w-5xl mx-auto px-6 py-8 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Richie Vu
          </h1>
          <ul className="flex items-center gap-6">
            <li>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-3 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-md shadow-sm border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform duration-300"
                aria-label="Toggle Dark Mode"
              >
                <BsFillMoonStarsFill className="text-lg text-teal-600 dark:text-teal-400" />
              </button>
            </li>
          </ul>
        </nav>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          {/* Hero Section */}
          <section className="py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            {/* Content Container */}
            <div className="flex-1 w-full">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-teal-200 dark:border-teal-900/50 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 text-sm font-semibold tracking-wide">
                Westminster, CA
              </div>
              <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
                Full Stack <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500 dark:from-teal-400 dark:to-cyan-300">
                  Data Scientist.
                </span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
                Architecting scalable data pipelines and deploying machine
                learning models into full-stack applications.
              </p>

              {/* Buttons Container */}
              <div className="flex flex-col gap-4 mb-10">
                {/* Row 1: Primary Action & Socials */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://drive.google.com/file/d/1Hq81v9vn9Gm_1oFpsITaEKZ-WWvgeyAp/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white transition-all duration-300 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:-translate-y-1 overflow-hidden"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                    <span className="relative flex items-center gap-2">
                      View Resume <BsFileEarmarkPdf />
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/richie-vu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 hover:text-teal-600 dark:hover:text-teal-400 transition-all hover:-translate-y-1 font-medium text-slate-700 dark:text-slate-300"
                  >
                    <AiFillLinkedin /> LinkedIn
                  </a>
                  <a
                    href="https://github.com/RichieVu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 hover:text-teal-600 dark:hover:text-teal-400 transition-all hover:-translate-y-1 font-medium text-slate-700 dark:text-slate-300"
                  >
                    <AiFillGithub /> GitHub
                  </a>
                </div>

                {/* Row 2: Contact Info */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="mailto:richie.p.vu@gmail.com"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 hover:text-teal-600 dark:hover:text-teal-400 transition-all hover:-translate-y-1 font-medium text-slate-600 dark:text-slate-400"
                  >
                    <BsEnvelopeAt /> richie.p.vu@gmail.com
                  </a>
                  <a
                    href="tel:7149003453"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 hover:text-teal-600 dark:hover:text-teal-400 transition-all hover:-translate-y-1 font-medium text-slate-600 dark:text-slate-400"
                  >
                    <BsTelephone /> (714) 900-3453
                  </a>
                </div>
              </div>
            </div>

            {/* Profile Image Container */}
            <div className="w-48 h-48 md:w-72 md:h-72 relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 flex-shrink-0 rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/pfp1.jpg"
                fill
                className="object-cover"
                alt="Richie Vu Profile Picture"
                priority
              />
            </div>
          </section>

          {/* About Me */}
          <section className="py-12 md:py-16 mb-8">
            <div className="p-8 md:p-10 rounded-3xl bg-white/40 dark:bg-slate-800/20 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Hiya, I&apos;m Richie!
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                I am a Full-Stack Data Scientist and Systems Architect focused
                on turning operational bottlenecks into automated, predictive
                ecosystems. Currently completing my MS in Data Science, I thrive
                in the space where heavy backend infrastructure meets advanced
                statistical modeling to deliver tangible, enterprise-wide value.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                When I step away from the keyboard, I treat my hobbies with the
                same precision and creativity I apply to code. You can usually
                find me dialing in single-origin beans, engaging with
                independent cinema, or diving into my next speculative science
                fiction novel.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                I am a learner, a doer, an explorer of a world hidden by the
                magnitudes of data.
              </p>
            </div>
          </section>

          {/* Professional Journey */}
          <section className="py-20">
            <h3 className="text-sm font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-12 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-teal-600 dark:bg-teal-400"></span>{" "}
              My Journey... So Far
            </h3>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
              {/* Envoy Air */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-[#0B1120] bg-teal-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-2xl bg-white/60 dark:bg-slate-800/40 backdrop-blur-xl border border-slate-100 dark:border-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:bg-slate-800/60">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Envoy Air
                    </h4>
                    <span className="text-xs font-bold px-3 py-1 bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300 rounded-full">
                      May 2025 - Present
                    </span>
                  </div>
                  <p className="text-teal-600 dark:text-teal-400 font-medium mb-4">
                    Full Stack Data Architect and Analyst
                  </p>
                  <ul className="list-disc list-outside ml-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed space-y-3">
                    <li>
                      Designed and deployed Atlas, a proprietary automation
                      platform across four major airport hubs, automating
                      395,700+ actions and delivering $510,000+ in value within
                      12 months.
                    </li>
                    <li>
                      Built Power Platform pipelines to automate ticketing and
                      communications, eliminating critical administrative
                      bottlenecks.
                    </li>
                    <li>
                      Architected SQL databases and a Blazor app to migrate
                      legacy SharePoint data into structured environments for
                      real-time telemetry.
                    </li>
                  </ul>
                </div>
              </div>

              {/* WGU Education */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-[#0B1120] bg-slate-300 dark:bg-slate-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-teal-400"></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-2xl bg-white/60 dark:bg-slate-800/40 backdrop-blur-xl border border-slate-100 dark:border-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:bg-slate-800/60">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      Western Governors University
                    </h4>
                    <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 rounded-full">
                      Exp. Oct 2026
                    </span>
                  </div>
                  <p className="text-teal-600 dark:text-teal-400 font-medium mb-4">
                    MSDA Data Science
                  </p>
                  <ul className="list-disc list-outside ml-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed space-y-3">
                    <li>
                      Executing capstone research focused on developing
                      predictive models using advanced linear and logistic
                      regression techniques.
                    </li>
                    <li>
                      Maintaining a 4.0 GPA with rigorous coursework in Data
                      Management, Analytics Programming, and statistical
                      modeling.
                    </li>
                  </ul>
                </div>
              </div>

              {/* OCC Tutoring */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-[#0B1120] bg-slate-300 dark:bg-slate-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-teal-400"></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-2xl bg-white/60 dark:bg-slate-800/40 backdrop-blur-xl border border-slate-100 dark:border-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:bg-slate-800/60">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      Orange Coast College
                    </h4>
                    <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 rounded-full">
                      Dec 2019 - May 2025
                    </span>
                  </div>
                  <p className="text-teal-600 dark:text-teal-400 font-medium mb-4">
                    Professional Expert in Statistics & Calculus
                  </p>
                  <ul className="list-disc list-outside ml-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed space-y-3">
                    <li>
                      Facilitated professor-endorsed workshops and provided
                      advanced tutoring in statistics, linear algebra, and
                      Calculus III.
                    </li>
                    <li>
                      Strengthened foundational mathematics crucial for machine
                      learning and predictive modeling by breaking down complex
                      concepts for hundreds of students.
                    </li>
                  </ul>
                </div>
              </div>

              {/* UCSC Education */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-[#0B1120] bg-slate-300 dark:bg-slate-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-teal-400"></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-2xl bg-white/60 dark:bg-slate-800/40 backdrop-blur-xl border border-slate-100 dark:border-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:bg-slate-800/60">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      UC Santa Cruz
                    </h4>
                    <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 rounded-full">
                      Mar 2023
                    </span>
                  </div>
                  <p className="text-teal-600 dark:text-teal-400 font-medium mb-4">
                    BS Computer Science
                  </p>
                  <ul className="list-disc list-outside ml-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed space-y-3">
                    <li>
                      Built a robust foundation in software engineering and data
                      structures, graduating with a 3.42 GPA.
                    </li>
                    <li>
                      Completed specialized technical coursework spanning
                      Applied Machine Learning, Relational Databases, and the
                      Analysis of Algorithms.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="py-20">
            <h3 className="text-sm font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-12 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-teal-600 dark:bg-teal-400"></span>{" "}
              Featured Work
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="group block relative rounded-3xl p-[1px] bg-gradient-to-b from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-800 hover:from-teal-500 hover:to-cyan-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.3)]">
                <div className="bg-white dark:bg-slate-900 h-full rounded-[23px] p-8 flex flex-col justify-between">
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 flex justify-between items-center">
                      Spotify Jamtop{" "}
                      <span className="text-xs font-normal text-slate-400">
                        Feb 2024 - July 2024
                      </span>
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-sm">
                      Built a Spotify API web app with Node.js, Express, and
                      Socket.io for synchronous, real-time music streaming.
                    </p>
                  </div>
                  <a
                    href="https://github.com/RichieVu/Jamtop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 dark:text-teal-400 font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    View Repository <BsArrowUpRight className="text-xs" />
                  </a>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group block relative rounded-3xl p-[1px] bg-gradient-to-b from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-800 hover:from-teal-500 hover:to-cyan-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.3)]">
                <div className="bg-white dark:bg-slate-900 h-full rounded-[23px] p-8 flex flex-col justify-between">
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 flex justify-between items-center">
                      Portfolio Website{" "}
                      <span className="text-xs font-normal text-slate-400">
                        Present
                      </span>
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-sm">
                      My personal engineering portfolio. Designed as a highly
                      interactive, single-page web application featuring
                      responsive layouts and glassmorphism UI elements.
                    </p>
                  </div>
                  <a
                    href="https://github.com/RichieVu/web-portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 dark:text-teal-400 font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    View Repository <BsArrowUpRight className="text-xs" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Beyond the Code */}
          <section className="py-20 pb-32">
            <h3 className="text-sm font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-12 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-teal-600 dark:bg-teal-400"></span>{" "}
              Beyond the Code
            </h3>

            <div className="space-y-12">
              {/* Improved Field Notes Section */}
              <div className="group bg-white/60 dark:bg-slate-800/40 backdrop-blur-md rounded-2xl p-10 border border-slate-200 dark:border-slate-700 hover:border-teal-500/50 transition-colors shadow-sm">
                <div className="prose dark:prose-invert max-w-2xl text-slate-600 dark:text-slate-400 border-l-4 border-teal-500 pl-6 py-2">
                  <p className="leading-relaxed text-lg italic">
                    &quot;I hope that you were motivated by a desire for
                    knowledge, a yearning to see what can arise from a
                    universe&apos;s exhalation. Because even if a
                    universe&apos;s lifespan is calculable, the variety of life
                    that is generated within it is not.&quot;
                    <br />— Ted Chiang, Exhalation
                  </p>
                </div>
              </div>

              {/* Digital Consumption */}
              <div className="group bg-white/60 dark:bg-slate-800/40 backdrop-blur-md rounded-2xl p-8 border border-slate-200 dark:border-slate-700 transition-colors">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-100 text-teal-600 dark:bg-teal-900/50 dark:text-teal-400">
                    <BsCameraVideo />
                  </span>
                  Favorite Visual Media
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Everything Everywhere All at Once",
                    "Frankenstein",
                    "End of Evangelion",
                    "Wall-E",
                    "Over The Garden Wall",
                    "Andor",
                  ].map((item) => (
                    <div
                      key={item}
                      className="border-b border-slate-200 dark:border-slate-700 pb-2"
                    >
                      <p className="font-semibold text-slate-800 dark:text-slate-200">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bookshelf */}
              <div className="group bg-white/60 dark:bg-slate-800/40 backdrop-blur-md rounded-2xl p-8 border border-slate-200 dark:border-slate-700 transition-colors">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-100 text-teal-600 dark:bg-teal-900/50 dark:text-teal-400">
                    <BsBook />
                  </span>
                  Bookshelf
                </h4>
                <div className="space-y-4">
                  {[
                    { title: "Exhalation", author: "Ted Chiang" },
                    { title: "The Road", author: "Cormac McCarthy" },
                    {
                      title: "On this Earth We are Briefly Gorgeous",
                      author: "Ocean Vuong",
                    },
                    { title: "Piranesi", author: "Susanna Clarke" },
                  ].map((book) => (
                    <div
                      key={book.title}
                      className="border-b border-slate-200 dark:border-slate-700 pb-2"
                    >
                      <p className="font-semibold text-slate-800 dark:text-slate-200">
                        {book.title}{" "}
                        <span className="font-normal text-slate-500">
                          by {book.author}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Travel Atlas */}
              <div className="group bg-white/60 dark:bg-slate-800/40 backdrop-blur-md rounded-2xl p-8 border border-slate-200 dark:border-slate-700 transition-colors">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-100 text-teal-600 dark:bg-teal-900/50 dark:text-teal-400">
                    <BsGeoAlt />
                  </span>
                  Travel Atlas
                </h4>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <BsCheck2Square className="text-teal-500" /> International
                    </h5>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                      <li>Hong Kong</li> <li>Tokyo, Japan</li>{" "}
                      <li>Seoul, South Korea</li> <li>Bangkok, Thailand</li>{" "}
                      <li>Taipei, Taiwan</li> <li>Montreal, Canada</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <BsCheck2Square className="text-teal-500" /> United States
                    </h5>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 columns-2">
                      <li>Seattle, WA</li> <li>San Francisco, CA</li>{" "}
                      <li>Portland, ME</li> <li>Los Angeles, CA</li>{" "}
                      <li>Dallas, TX</li> <li>Houston, TX</li>
                      <li>Chicago, IL</li> <li>Orlando, FL</li>{" "}
                      <li>Boston, MA</li> <li>Maui, HI</li> <li>Phoenix, AZ</li>{" "}
                      <li>Salt Lake City, UT</li> <li>Philly, PA</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <BsSuitHeart className="text-pink-500" /> Next Up
                    </h5>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                      <li>Hanoi, Vietnam</li> <li>Paris, France</li>{" "}
                      <li>Shanghai, China</li> <li>Chengdu, China</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
