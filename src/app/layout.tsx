import type { Metadata } from 'next'
import './globals.css'
import { Lato } from 'next/font/google'
import { ToastContainer } from 'react-toastify'

const lato = Lato({ subsets: ['latin'], weight: ['400', '700', '900'] })

export const metadata: Metadata = {
  title: 'Portfolio Leonardo Eugenio Mascarenhas Mantoni',
  description:
    'Com mais de sete anos de experiência em desenvolvimento e três anos atuando com as tecnologias mais modernas do mercado — como Next.js, React.js, Tailwind CSS e Node.js — sigo evoluindo e construindo soluções eficientes e criativas. Em breve, novos projetos estarão disponíveis por aqui!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased ${lato.className}`}>
        <ToastContainer />
        {children}
      </body>
    </html>
  )
}
