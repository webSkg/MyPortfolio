import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import { BsFillMoonStarsFill } from "react-icons/bs"
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai"
import Char from "../public/char-min.png"

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title> Sudhanshu</title>
        <meta name="google-site-verification" content="smlYPaCoj2jlkXd_U03v8YTLonbYC4a_r-FW5k1aMYQ" />
        <meta name="RPS" content="Portfolio of Sudhanshu kumar dwivedi" />
        <meta
          name="description"
          content="portfolio for my career in Blockchain"
        />
        <link rel="icon" href="./favicon.png" />
      </Head>
      <main className=" bg-white px-10 dark:bg-black md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-8 mb-6 flex justify-between dark:text-white">
            <h1 className="font-poppins font-bold text-2xl tracking-widest ">
              SKD
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="/SKDresume.pdf" target="_blank" rel="noopener noreferrer">

                  Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-5">
            <h2 className="text-4xl py-4 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Sudhanshu kumar Dwivedi
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Blockchain Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Enthusiast for development of the Blockchain. Always looking for a new
              opportunity to push myself to the very Next Level.
            </p>
            <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400 ">
              <a
                href="https://github.com/webSkg"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://twitter.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillTwitterCircle />
              </a>
              <a
                href="https://www.linkedin.com/in/sudhanshu-kumar-dwivedi-4ab2771a6/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
            </div>
            <div style={{
              backgroundSize:"cover",
              backgroundImage: 'url("https://www.irishtimes.com/resizer/-Rws_whVhWVmZkrgDEdyuE52cj0=/1600x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/KJG37ZVHV2CBWPUZXSHGMXIBJM.jpg")'
            }} className="bg-bottom	 object-cover mx-auto  rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image
                src={Char}
                alt="3D imitation of myself"
                objectFit="cover"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
