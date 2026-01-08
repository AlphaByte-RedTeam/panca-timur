import AboutUs from './components/about-us'
import Footer from './components/footer'
import Hero from './components/hero'
import InsightsUpdates from './components/insights-updates'
import Navbar from './components/navbar'
import Portfolio from './components/portfolio'
import Solutions from './components/solutions'

export const metadata = {
  title: 'Panca Timur Raya | Mechanical Electrical Plumbing Contractor',
  description:
    'Panca Timur Raya berkomitmen memberikan layanan konstruksi Mechanical, Electrical, dan Plumbing (MEP) yang berkualitas, tepat waktu, aman, dan sesuai standar industri.',
  keywords:
    'Panca Timur Raya, konstruksi, electrical, hvac, mechanical, plumbing, solusi, proyek MEP',
  locale: 'id_ID',
  type: 'website',
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Solutions />
      <Portfolio />
      <InsightsUpdates />
      <Footer />
    </>
  )
}
