import Image from 'next/image'
import React from 'react'
import { BookAConsultationButton } from '../components/book-a-consultation-button'
import { PortofolioTabs } from '../components/portofolio-tabs'
import { Metadata } from 'next'
import config from '@payload-config'
import { getPayload } from 'payload'
import { ProjectsTable } from '../components/projects-table'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

const payload = await getPayload({ config })

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Projek Portofolio PT Panca Timur Raya. Solusi Mechanical, Electrical, dan Plumbing untuk berbagai kebutuhan proyek. Dirancang dengan perencanaan matang, standar keselamatan, dan efisiensi kerja. Mendukung performa bangunan yang andal dan berkelanjutan.',
}

export default async function PortfolioPage() {
  const config = await payload.findGlobal({
    slug: 'portofolio-page',
  })
  return (
    <>
      <div className="relative w-full h-[122px] md:h-[244px] xl:h-[400px]">
        {typeof config.portofolio_hero === 'string' ? (
          <Image
            src={config.portofolio_hero}
            alt={config.portofolio_hero}
            fill
            priority
            unoptimized
            className="object-cover"
          />
        ) : (
          <Image
            src={config?.portofolio_hero?.url ?? '/dokumPancaTimurR/hvac1.jpg'}
            alt={config.portofolio_hero?.alt ?? 'Image Portfolio'}
            fill
            priority
            unoptimized
            className="object-cover"
          />
        )}
      </div>
      <div className="flex flex-col lg:flex-row px-[24px] py-[12px] md:px-[44px] md:py-[20px]  xl:px-[68px] xl:py-[58px] ">
        <h1 className="titleh1 text-[#0062B0] w-full">{config.portofolio_hero_heading}</h1>
        <div className="lg:max-w-[500px]">
          <p className="alternative my-[20px] lg:mb-[30px]">{config.portofolio_hero_description}</p>
          <div>
            <BookAConsultationButton />
          </div>
        </div>
      </div>

      <div className="px-[20px] md:px-[44px]">
        <h1 className="titleh1 py-[19px] text-[#10385d]">{config.portofolio_project_heading}</h1>
        <p className="p text-[#747775] pb-4">
          A structured overview of our project experience across industries.
        </p>
        <ProjectsTable />
        <Pagination className="pt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      <div className="px-[20px] md:px-[44px]">
        <h1 className="titleh1 py-[19px] text-[#10385d]">Gallery</h1>
        <p className="p text-[#747775]">Selected projects delivered by our experienced team.</p>
      </div>

      <PortofolioTabs />
    </>
  )
}
