import './globals.css'
import { Inter, Montserrat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata = {
  title: 'M. Usman Ghanni | Photographer & Videographer',
  description: 'Professional Cinematography and Photography Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`
        ${inter.variable} ${montserrat.variable} font-sans 
        bg-white text-black selection:bg-black selection:text-white
        dark:bg-[#0a0a0a] dark:text-white dark:selection:bg-white dark:selection:text-black
        transition-colors duration-300
      `}>
        {children}
      </body>
    </html>
  )
}