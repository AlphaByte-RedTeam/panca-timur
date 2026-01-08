import { Metadata } from 'next'
import './styles.css'
import { Manrope } from 'next/font/google'

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | Panca Timur Raya',
    default: 'Website Panca Timur Raya',
  },
  description:
    ' PT. Panca Timur Raya berkomitmen memberikan layanan konstruksi Mechanical, Electrical, dan Plumbing (MEP) yang berkualitas, tepat waktu, aman, dan sesuai standar industri.',
  icons: {
    icon: 'dokumPancaTimurR/logo.jpg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  )
}
