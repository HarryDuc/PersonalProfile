import Link from "next/link"
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {


  return (
    <div className="flex flex-col py-28 px-10 sm:px-0 gap-56">
      <div id="home" className=" text-center h-screen mt-32">
        <div className="text-sm font-medium mb-2">Hello I&apos;m</div>
        <div className="text-6xl font-thin mb-1">Cale Adrian Lacson</div>
        <div className="text-[#4db5ff] font-medium">Software Engineer</div>

        <div className="mt-3">
          <a href="https://www.linkedin.com/in/cale-adrian/" target="_blank" rel="noreferrer" className="font-semibold inline-flex items-center rounded mr-3">
            <BsLinkedin className="text-[#4db5ff] h-5 w-5" />
          </a>

          <a href="https://github.com/caleadrian/" target="_blank" rel="noreferrer" className="font-semibold inline-flex items-center rounded">
            <FaGithub className="text-[#4db5ff] h-5 w-5" />
          </a>
        </div>

        <div className="mt-10">

          <a alt="download cv" download rel="noopener noreferrer"
            href="/files/CALE_LACSON_2022.pdf" className="border border-[#4db5ff] font-semibold text-[#4db5ff] py-2.5 px-8 rounded-full mr-3 hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-500">
            Download CV
          </a>
          <Link href='#contact'>
            <button className="border border-[#4db5ff] bg-[#4db5ff] font-semibold text-gray-900 py-2.5 px-8 rounded-full hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-500" type="button">
              Let&apos;s talk
            </button>
          </Link>
        </div>
      </div>

      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}
