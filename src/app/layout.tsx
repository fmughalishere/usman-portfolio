import './globals.css'
import { Inter, Montserrat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata = {
  title: 'Usman Ghanni | Photographer & Videographer',
  description: 'Professional Cinematography and Photography Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${montserrat.variable} font-sans bg-[#0a0a0a] text-white selection:bg-white selection:text-black`}>
        {children}
      </body>
    </html>
  )
}
