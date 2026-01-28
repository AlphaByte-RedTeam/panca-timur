'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { RefreshCcw } from 'lucide-react'
import React from 'react'

type GalleryItem = {
  src: string
  alt: string
}

export default function GalleryAll({ items }: { items: GalleryItem[] }) {
  const [visibleCount, setVisibleCount] = React.useState(6)
  const [increment, setIncrement] = React.useState(3)

  React.useEffect(() => {
    const updateIncrement = () => {
      if (window.innerWidth >= 1280) {
        setIncrement(3)
      } else {
        setIncrement(2)
      }
    }
    updateIncrement()
  }, [])

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-y-[16px] md:gap-y-[24px] lg:gap-y-[44px]"
      >
        {items.slice(0, visibleCount).map((item, index) => (
          <div key={index} className="relative w-[350px] h-[467px]">
            <Image src={item.src} alt={item.alt} fill className="object-cover" />
          </div>
        ))}
      </motion.div>

      {visibleCount < items.length && (
        <div className="mt-[32px] px-6 lg:px-0 flex justify-center">
          <Button
            variant="secondary"
            className="w-full lg:w-[243px]"
            onClick={() => setVisibleCount((prev) => prev + increment)}
            aria-label="Muat foto lebih banyak"
          >
            Load More
            <RefreshCcw />
          </Button>
        </div>
      )}
    </>
  )
}
