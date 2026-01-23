'use client'

import { SiteConfig } from '@/payload-types'
import { Mail, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { BookAConsultationButton } from './book-a-consultation-button'
import { RichText } from '@payloadcms/richtext-lexical/react'

const Footer = ({ config }: { config: SiteConfig }) => {
  return (
    <div className="">
      <div className="mt-6 flex flex-col  bg-[linear-gradient(180deg,_#10385D_0%,_#0070C0_52.88%,_#E1E1E1_100%)] mx-6 rounded-[8px] justify-center items-center gap-[32px] lg:gap-[32px] py-[40px] px-[20px] md:py-[54px] md:px-[80px] lg:py-[90px] lg:px-[180px]">
        <h1 className="text-[white] text-center titleh1">{config.footer_heading}</h1>
        <p className="p text-[white] text-center">{config.footer_description}</p>
        <BookAConsultationButton />
      </div>
      <div className="pt-[58px] flex justify-between p-8 flex-col md:flex-row">
        <div className=" w-[306px]">
          <Link href={'/'} aria-label="Kembali ke halaman utama">
            {typeof config.logo === 'string' ? (
              <Image
                src={config.logo}
                alt={config.logo}
                width={128}
                height={93}
                className="object-contain"
              />
            ) : (
              <Image
                src={config?.logo?.url ?? '/dokumPancaTimurR/logo.jpg'}
                alt={config.logo?.alt ?? 'Gambar Logo Panca Timur Raya'}
                width={128}
                height={93}
                className="object-contain"
              />
            )}
          </Link>
          <RichText className="footer mt-[13px]" data={config.address} />
          <p className="hidden md:block text-[8px] font-[400] text-[#747775] mt-[43px]">
            @ Copyright 2025. All Rights Reserved.
          </p>
        </div>
        <div className="text-left mt-8 md:mt-0 md:text-right flex flex-col gap-[12px]">
          <p className="font-[700] text-[20px]">Menu</p>
          <Link href={'/detail-about-us'} aria-label="ke halaman About Us">
            About Us
          </Link>
          <Link href={'/detail-solutions'} aria-label="ke halaman Solutions">
            Solutions
          </Link>
          <Link href={'/detail-portfolio'} aria-label="ke halaman Portfolio">
            Portfolio
          </Link>
          <Link href={'/detail-insights-updates'} aria-label="ke halaman Insights Updates">
            Insights & Updates
          </Link>
          <div className="flex flex-row gap-4 justify-start md:justify-end">
            <Link
              href={'mailto:panca_timur_raya@yahoo.com'}
              target="_blank"
              aria-label="Email ke panca_timur_raya@yahoo.com"
            >
              <Mail />
            </Link>
            <Link
              href={`https://wa.me/${config.phone}`}
              target="_blank"
              aria-label={`WhatsApp ke ${config.phone}`}
            >
              <MessageCircle />
            </Link>
          </div>
          <p className="text-[12px] font-[400]">Mechanical Electrical • Plumbing Contractor</p>
          <p className="block md:hidden text-[8px] font-[400] text-[#747775] mt-[12px]">
            @ Copyright 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
