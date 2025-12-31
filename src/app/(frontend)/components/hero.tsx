'use client'

import { Button } from '@/components/ui/button'
import { MoveUpRight, Phone } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center justify-between overflow-hidden">
      <div className="flex flex-col gap-4 max-w-3xl px-6 lg:px-8 w-full">
        <h1 className="titleh1 text-[#10385d]">
          Delivering{' '}
          <span className="relative inline-block">
            Quality
            <span className="absolute left-0 bottom-0 -translate-y-1.5 w-full max-w-[162px] h-[4px] bg-[#10385D] rounded-full" />
          </span>{' '}
          Mechanical Electrical and Plumbing Solutions
        </h1>

        <p className="alternative">
          Sejak 2013, PT. Panca Timur Raya berkomitmen memberikan layanan konstruksi Mechanical,
          Electrical, dan Plumbing (MEP) yang berkualitas, tepat waktu, aman, dan sesuai standar
          industri.
        </p>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full">
          <Button className="w-full lg:w-[243px]">
            <Phone className="w-4 h-4" />
            Book a Consultation
          </Button>

          <Button variant="secondary" className="w-full lg:w-[243px]">
            View Projects
            <MoveUpRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="w-full max-w-[653px]">
        <Image
          className="w-full h-auto object-contain"
          src="/dokumPancaTimurR/electrical2.jpg"
          width={653}
          height={505}
          alt="Gambar Panca Timur Raya"
          priority
        />
      </div>
    </div>
  )
}

export default Hero
