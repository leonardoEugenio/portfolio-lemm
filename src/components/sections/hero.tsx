import Link from 'next/link'
import { LightCursorContent } from '../lightCursorContent'
import { FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import {
  RiNextjsLine,
  RiNodejsFill,
  RiReactjsLine,
  RiTailwindCssFill,
} from 'react-icons/ri'
import { CopyButton } from '../buttons/copybutton'

export function Hero() {
  return (
    <section>
      <LightCursorContent>
        <div className="bg-action-blue-800 w-full h-screen flex items-center justify-center px-4">
          <div className="max-w-screen-xl mx-auto px-4 pb-16">
            <h1 className="md:text-2xl text-action-blue-500 uppercase font-bold text-center md:text-start">
              OLÁ, 👋 EU SOU O LEONARDO EUGENIO
            </h1>
            <div className="flex gap-4"></div>
            <h2 className="text-white text-4xl md:text-6xl lg:text-8xl xl:text-9xl text-center md:text-start">
              DESENVOLVEDOR
            </h2>
            <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
              <h2 className="text-white text-3xl md:text-5xl lg:text-7xl xl:text-8xl text-center md:text-start">
                REACT.JS
              </h2>
              <div className="flex gap-4 items-center mt-auto">
                <Link
                  href="https://www.linkedin.com/in/leonardo-eugenio/"
                  target="_blank"
                  className="flex items-center h-full text-white duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <FaLinkedin className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl align-middle" />
                </Link>
                <Link
                  href="https://github.com/leonardoEugenio/"
                  target="_blank"
                  className="flex items-center h-full text-white duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <FaGithub className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl align-middle" />
                </Link>
                <Link
                  href="/documents/curriculo-leonardo-eugenio-mascarenhas-mantoni.pdf"
                  target="_blank"
                  className="flex items-center h-full text-white duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <FaFileAlt className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl align-middle" />
                </Link>
              </div>
            </div>
            <p className="text-white mt-8 text-center text-sm md:text-lg">
              Com mais de sete anos de experiência em desenvolvimento e três
              anos atuando com as tecnologias mais modernas do mercado — como
              Next.js, React.js, Tailwind CSS e Node.js — sigo evoluindo e
              construindo soluções eficientes e criativas. Em breve, novos
              projetos estarão disponíveis por aqui!
            </p>
            <div className="mt-8 flex justify-center">
              <CopyButton
                value="leonardodo.emmantoni@gmail.com"
                label="ME CONTATE!"
              />
            </div>
          </div>
        </div>
        <div className="absolute z-50 w-full px-4 sm:w-xl bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex gap-4 p-4 justify-between border border-metal-gray-500 bg-white/10 shadow-lg rounded-3xl">
            <div className="flex justify-center flex-col">
              <RiNextjsLine className="text-5xl md:text-5xl text-white text-center w-full" />
              <h2 className="text-white text-center hidden sm:inline-block">
                NEXT.JS
              </h2>
            </div>
            <div className="flex justify-center flex-col">
              <RiReactjsLine className="text-5xl md:text-5xl text-white text-center w-full" />
              <h2 className="text-white text-center hidden sm:inline-block">
                REACT.JS
              </h2>
            </div>
            <div className="flex justify-center flex-col">
              <RiNodejsFill className="text-5xl md:text-5xl text-white text-center w-full" />
              <h2 className="text-white text-center hidden sm:inline-block">
                NODE.JS
              </h2>
            </div>
            <div className="flex justify-center flex-col">
              <RiTailwindCssFill className="text-5xl md:text-5xl text-white text-center w-full" />
              <h2 className="text-white text-center hidden sm:inline-block">
                TAILWIND
              </h2>
            </div>
          </div>
        </div>
      </LightCursorContent>
    </section>
  )
}
