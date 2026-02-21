'use client'

import { PayloadSDK } from '@payloadcms/sdk'
import { useQuery } from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import type { Config } from '../../../../payload-types'
import type { Dispatch, SetStateAction } from 'react'
import { Fragment, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollBar } from '@/components/ui/scroll-area'
import { Skeleton } from '@/components/ui/skeleton'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'

const GalleryAll = dynamic(() => import('./gallery-all'), { ssr: false })

type GalleryItem = {
  src: string
  alt: string
}

const sdk = new PayloadSDK<Config>({
  baseURL: '/api',
})

const DynamicTabs = ({
  setCurrentTabSetter,
}: {
  setCurrentTabSetter: Dispatch<SetStateAction<string>>
}) => {
  const servicesQuery = useQuery({
    queryKey: ['solutions-services'],
    queryFn: async () => {
      return await sdk.find({
        collection: 'services',
        limit: 0,
      })
    },
  })
  if (servicesQuery.data) {
    return (
      <>
        {servicesQuery.data.docs.map((data) => (
          <Fragment key={data.id}>
            <TabsTrigger onClick={() => setCurrentTabSetter(data.title)} value={data.title}>
              {data.title}
            </TabsTrigger>
          </Fragment>
        ))}
      </>
    )
  } else {
    return (
      <>
        <TabsTrigger
          onClick={() => setCurrentTabSetter('Mechanical & Plumbing')}
          value="mechanicalplumbing"
        >
          Mechanical & Plumbing
        </TabsTrigger>
        <TabsTrigger onClick={() => setCurrentTabSetter('HVAC')} value="hvac">
          HVAC
        </TabsTrigger>
        <TabsTrigger onClick={() => setCurrentTabSetter('Electrical')} value="electrical">
          Electrical
        </TabsTrigger>
      </>
    )
  }
}

export const PortofolioTabs = () => {
  const [currentTab, setCurrentTab] = useState('all')

  const query = useQuery({
    queryKey: ['portofolio', currentTab],

    queryFn: async ({ queryKey: [, currentTab] }) => {
      let data
      if (currentTab !== 'all') {
        data = await sdk.find({
          collection: 'portofolio',
          limit: 0,
          where: {
            'tag.title': { equals: currentTab },
          },
        })
      } else {
        data = await sdk.find({
          collection: 'portofolio',
          limit: 0,
        })
      }
      const imageData: GalleryItem[] = data.docs.map((data) => {
        if (typeof data.image === 'string') {
          return {
            src: data.image,
            alt: data.image,
          }
        } else {
          return {
            src: data.image.url ?? '',
            alt: data.image.alt,
          }
        }
      })
      return imageData
    },
  })

  const servicesQuery = useQuery({
    queryKey: ['solutions-services'],
    queryFn: async () => {
      return await sdk.find({
        collection: 'services',
        limit: 0,
      })
    },
  })

  return (
    <Tabs defaultValue="all" className="w-full">
      <ScrollArea className="w-full py-4 ">
        <TabsList className="flex w-max flex-nowrap justify-start">
          <TabsTrigger onClick={() => setCurrentTab('all')} value="all">
            All
          </TabsTrigger>

          <DynamicTabs setCurrentTabSetter={setCurrentTab} />
          <ScrollBar orientation="horizontal" />
        </TabsList>
      </ScrollArea>
      <TabsContent value="all" className="mt-[8px] md:mt-0">
        <div className="relative min-h-[250px]">
          {query.data ? (
            <GalleryAll items={query.data} />
          ) : query.isError ? (
            <Card className="flex flex-col  m-2 mx-6">
              <CardHeader className="w-full pt-[24px] md:pt-[44px] lg:pt-[60px] mb-[16px]">
                <CardTitle className="text-center">Tidak ditemukan Portofolio</CardTitle>
              </CardHeader>
              <CardContent className="w-full text-center pb-[12px] mb-[16px]">
                <div className="p">Mungkin terjadi kesalahan, coba muat ulang halaman ini</div>
              </CardContent>
              <CardFooter>
                <div className="invisible" aria-hidden="true">
                  Spacer
                </div>
              </CardFooter>
            </Card>
          ) : query.isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-y-[16px] md:gap-y-[24px] lg:gap-y-[44px]">
              <Skeleton className="relative bg-gray-100 w-[350px] h-[467px] object-cover my-[16px] md:my-[24px] lg:my-[44px]" />
              <Skeleton className="hidden md:block relative bg-gray-100 w-[350px] h-[467px] object-cover my-[16px] md:my-[24px] lg:my-[44px]" />
              <Skeleton className="hidden lg:block relative bg-gray-100 w-[350px] h-[467px] object-cover my-[16px] md:my-[24px] lg:my-[44px]" />
            </div>
          ) : (
            <Card className="flex flex-col  m-2 mx-6">
              <CardHeader className="w-full pt-[24px] md:pt-[44px] lg:pt-[60px] mb-[16px]">
                <CardTitle className="text-center">Tidak ditemukan Portofolio</CardTitle>
              </CardHeader>
              <CardContent className="w-full text-center pb-[12px] mb-[16px]">
                <div className="p">Mungkin terjadi kesalahan, coba muat ulang halaman ini</div>
              </CardContent>
              <CardFooter>
                <div className="invisible" aria-hidden="true">
                  Spacer
                </div>
              </CardFooter>
            </Card>
          )}
        </div>
      </TabsContent>

      {servicesQuery.data?.docs.map((data) => (
        <Fragment key={data.id}>
          <TabsContent value={data.title} className="mt-[8px] md:mt-0">
            <div className="relative min-h-[250px]">
              {query.data ? (
                <GalleryAll items={query.data} />
              ) : query.isError ? (
                <Card className=" flex flex-col justify-items-center m-2 mx-6">
                  <CardHeader className="w-full pt-[24px] md:pt-[44px] lg:pt-[60px] mb-[16px]">
                    <CardTitle className="text-center">Tidak ditemukan Portofolio</CardTitle>
                  </CardHeader>
                  <CardContent className="w-full text-center pb-[12px] mb-[16px]">
                    <div className="p">Mungkin terjadi kesalahan, coba muat ulang halaman ini</div>
                  </CardContent>
                </Card>
              ) : query.isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-y-[16px] md:gap-y-[24px] lg:gap-y-[44px]">
                  <Skeleton className="relative bg-gray-100 w-[350px] h-[467px] object-cover my-[16px] md:my-[24px] lg:my-[44px]" />
                  <Skeleton className="hidden md:block relative bg-gray-100 w-[350px] h-[467px] object-cover my-[16px] md:my-[24px] lg:my-[44px]" />
                  <Skeleton className="hidden lg:block relative bg-gray-100 w-[350px] h-[467px] object-cover my-[16px] md:my-[24px] lg:my-[44px]" />
                </div>
              ) : (
                <Card className="flex flex-col  m-2 mx-6">
                  <CardHeader className="w-full pt-[24px] md:pt-[44px] lg:pt-[60px] mb-[16px]">
                    <CardTitle className="text-center">Tidak ditemukan Portofolio</CardTitle>
                  </CardHeader>
                  <CardContent className="w-full text-center pb-[12px] mb-[16px]">
                    <div className="p">Mungkin terjadi kesalahan, coba muat ulang halaman ini</div>
                  </CardContent>
                  <CardFooter>
                    <div className="invisible" aria-hidden="true">
                      Spacer
                    </div>
                  </CardFooter>
                </Card>
              )}
            </div>
          </TabsContent>
        </Fragment>
      ))}
    </Tabs>
  )
}
