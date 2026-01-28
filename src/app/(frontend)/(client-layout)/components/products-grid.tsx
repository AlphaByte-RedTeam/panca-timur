'use client'

import { PayloadSDK } from '@payloadcms/sdk'
import { Config } from '../../../../payload-types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { useQuery } from '@tanstack/react-query'
import { motion } from 'motion/react'
import Image from 'next/image'
import React from 'react'
import { useWindowWidth } from '../../hooks/use-window-width'

export const ProductsGrid = ({ isForLandingPage = false }: { isForLandingPage?: boolean }) => {
  const sdk = new PayloadSDK<Config>({
    baseURL: '/api',
  })
  // undefined limit = to the end
  const [limit, setLimit] = React.useState<number | undefined>(undefined)
  const windowWidth = useWindowWidth()

  React.useEffect(() => {
    if (!isForLandingPage || windowWidth === undefined) return
    if (windowWidth >= 1024) {
      setLimit(6)
    } else if (windowWidth >= 768) {
      setLimit(4)
    } else {
      setLimit(2)
    }
  }, [isForLandingPage, windowWidth])

  const queryProducts = useQuery({
    queryKey: ['solutions-products', limit],
    enabled: limit !== undefined,
    queryFn: async () => {
      return await sdk.find({
        collection: 'products',
        limit: limit,
      })
    },
  })

  if (queryProducts.error) {
    return (
      <Card className="flex flex-col m-2 mx-6">
        <CardHeader className="w-full pt-[24px] md:pt-[44px] lg:pt-[60px] mb-[16px]">
          <CardTitle className="text-center">Tidak ditemukan Produk</CardTitle>
        </CardHeader>
        <CardContent className="w-full text-center pb-[12px] mb-[16px]">
          <div className="p">Mungkin terjadi kesalahan, coba muat ulang halaman ini</div>
        </CardContent>
      </Card>
    )
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[41px] justify-items-center">
      {queryProducts.data ? (
        queryProducts.data.docs.slice(0, limit).map((data) => (
          <motion.div
            key={data.id}
            initial={{ opacity: 0.5, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="w-[294px] xl:w-[363px] overflow-hidden">
              <div className="relative w-full h-[303px] xl:h-[341px] min-h-[303px] xl:min-h-[341px]  ">
                {typeof data.image === 'string' ? (
                  <Image src={data.image} alt={data.image} fill className="object-cover p-4" />
                ) : (
                  <Image
                    src={data?.image?.url ?? '/dokumPancaTimurR/TankiFRP1.jpg'}
                    alt={data.image?.alt ?? 'Gambar Sampul'}
                    fill
                    className="object-cover p-4"
                  />
                )}
              </div>
              <CardHeader className="w-full text-center">
                <CardTitle className="whitespace-nowrap  pb-3">{data.name}</CardTitle>
              </CardHeader>
            </Card>
          </motion.div>
        ))
      ) : (
        <>
          <Skeleton className="bg-gray-100 mx-auto h-[400px] w-[294px] xl:w-[363px]" />
          <Skeleton className="hidden md:block bg-gray-100 mx-auto h-[400px] w-[294px] xl:w-[363px]" />
          <Skeleton className="hidden lg:block bg-gray-100 mx-auto h-[400px] w-[294px] xl:w-[363px]" />
        </>
      )}
    </div>
  )
}
