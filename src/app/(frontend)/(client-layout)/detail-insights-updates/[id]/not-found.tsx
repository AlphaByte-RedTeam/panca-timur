import { Button } from '@/components/ui/button'
import { FileXCorner } from 'lucide-react'
import Link from 'next/link'

export default async function NotFound() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] justify-items-center items-center py-20 xl:px-32 xl:py-16">
        <FileXCorner className="order-1 md:order-2 mb-8 md:mb-0 size-24 md:size-32 xl:size-36 text-[#10385d]" />
        <div className="order-2 md:order-1 w-2/3 flex flex-col ">
          <h1 className="titleh1">
            <span className="underline text-[#10385d]">Sorry!</span>, this page isn't available.
          </h1>
          <p className="h4blog py-4">Halaman yang kamu cari tidak ditemukan.</p>
          <Link href={'/'}>
            <Button>Kembali ke Halaman Utama</Button>
          </Link>
        </div>
      </div>
    </>
  )
}
