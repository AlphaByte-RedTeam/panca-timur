import React from 'react'
import Image from 'next/image'

const images: string[] = [
  '/dokumPancaTimurR/images/1.jpg',
  '/dokumPancaTimurR/images/2.jpg',
  '/dokumPancaTimurR/images/3.jpg',
  '/dokumPancaTimurR/images/4.jpg',
  '/dokumPancaTimurR/images/5.jpg',
  '/dokumPancaTimurR/images/6.jpg',
  '/dokumPancaTimurR/images/7.jpg',
]

const Tape: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden pt-6 bg-white">
      <div className="flex w-max animate-marquee">
        {[...images, ...images, ...images].map((src: string, index: number) => (
          <div key={index} className="mx-6 h-10 w-auto flex-shrink-0 overflow-hidden">
            <Image
              src={src}
              alt={`marquee-${index}`}
              width={256}
              height={160}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tape
