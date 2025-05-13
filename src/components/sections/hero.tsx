import Link from 'next/link'
import { LightCursorContent } from '../lightCursorContent'
import { FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import {
  RiNextjsLine,
  RiNodejsFill,
  RiReactjsLine,
  RiTailwindCssFill,
} from 'react-icons/ri'

export function Hero() {
  return (
    <section>
      <LightCursorContent>
        <div className="bg-action-blue-800 w-full h-screen flex items-center justify-center">
          <div className="max-w-screen-xl mx-auto px-4">
            <h1 className="text-2xl text-action-blue-500 uppercase font-bold">
              OLÁ, 👋 EU SOU O LEONARDO EUGENIO
            </h1>
            <div className="flex gap-4"></div>
            <h2 className="text-white text-9xl">DESENVOLVEDOR</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <h2 className="text-white text-8xl">REACT.JS</h2>
              <div className="flex gap-4 items-center grow mt-auto">
                <Link
                  href="https://www.linkedin.com/in/leonardo-eugenio/"
                  target="_blank"
                  className="flex items-center h-full text-white duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <FaLinkedin className="text-7xl align-middle" />
                </Link>
                <Link
                  href="https://github.com/leonardoEugenio/"
                  target="_blank"
                  className="flex items-center h-full text-white duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <FaGithub className="text-7xl align-middle" />
                </Link>
                <Link
                  href="/documents/curriculo-leonardo-eugenio-mascarenhas-mantoni.pdf"
                  target="_blank"
                  className="flex items-center h-full text-white duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <FaFileAlt className="text-7xl align-middle" />
                </Link>
              </div>
            </div>
            <p className="text-white mt-8 text-lg">
              Com mais de sete anos de experiência em desenvolvimento e três
              anos atuando com as tecnologias mais modernas do mercado — como
              Next.js, React.js, Tailwind CSS e Node.js — sigo evoluindo e
              construindo soluções eficientes e criativas. Em breve, novos
              projetos estarão disponíveis por aqui!
            </p>
          </div>
        </div>
        <div className="absolute z-50 w-xl bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex gap-4 p-4 justify-between border border-metal-gray-500 bg-white/10 shadow-2xl rounded-3xl">
            <div className="flex justify-center flex-col">
              <RiNextjsLine className="text-5xl text-white text-center w-full" />
              <h2 className="text-white text-center">NEXT.JS</h2>
            </div>
            <div className="flex justify-center flex-col">
              <RiReactjsLine className="text-5xl text-white text-center w-full" />
              <h2 className="text-white text-center">REACT.JS</h2>
            </div>
            <div className="flex justify-center flex-col">
              <RiNodejsFill className="text-5xl text-white text-center w-full" />
              <h2 className="text-white text-center">NODE.JS</h2>
            </div>
            <div className="flex justify-center flex-col">
              <RiTailwindCssFill className="text-5xl text-white text-center w-full" />
              <h2 className="text-white text-center">TAILWIND</h2>
            </div>
          </div>
        </div>
      </LightCursorContent>
    </section>
  )
}
