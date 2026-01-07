'use client'

import Image from 'next/image'
import Navbar from '../components/navbar'
import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Footer from '../components/footer'
import { motion } from 'motion/react'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

export default function AboutUsPage() {
  const handleBookaConsultation = () => {
    const pesan = `Halo, saya ingin menanyakan ...`
    const url = `https://wa.me/6281394056196?text=${encodeURIComponent(pesan)}`
    window.open(url, '_blank')
  }
  return (
    <>
      <Navbar />
      <div className="relative w-full h-[122px] md:h-[244px] xl:h-[400px]">
        <Image
          className="object-cover"
          fill
          alt="Image Portfolio"
          src={'/dokumPancaTimurR/hvac1.jpg'}
        />
      </div>
      <div className="flex flex-col lg:flex-row px-[24px] py-[12px] md:px-[44px] md:py-[20px]  xl:px-[68px] xl:py-[58px] ">
        <h1 className="titleh1 text-[#0062B0] w-full">
          Proven Experience in <br className="hidden xl:block" />
          Mechanical Electrical <br className="hidden xl:block" />
          and Plumbing Works
        </h1>
        <div className="lg:max-w-[500px]">
          <p className="alternative my-[20px] lg:mb-[30px]">
            Solusi Mechanical, Electrical, dan Plumbing untuk berbagai kebutuhan proyek. Dirancang
            dengan perencanaan matang, standar keselamatan, dan efisiensi kerja. Mendukung performa
            bangunan yang andal dan berkelanjutan.
          </p>
          <div>
            <Button onClick={handleBookaConsultation} className="w-full lg:w-[243px]">
              <Phone />
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>

      <div className="px-[20px] md:px-[44px]">
        <h1 className="titleh1 py-[19px] text-[#10385d]">Portfolio</h1>
        <p className="p text-[#747775]">Selected projects delivered by our experienced team.</p>
      </div>

      <div>
        <Tabs defaultValue="all" className="w-full">
          <ScrollArea className="w-full  py-4 ">
            <TabsList className="flex w-max flex-nowrap justify-start">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="mechanicalplumbing">Mechanical & Plumbing</TabsTrigger>
              <TabsTrigger value="hvac">HVAC</TabsTrigger>
              <TabsTrigger value="electrical">Electrical</TabsTrigger>
              <ScrollBar orientation="horizontal" />
            </TabsList>
          </ScrollArea>
          <TabsContent value="all" className="mt-[8px] md:mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-y-[16px] md:gap-y-[24px] lg:gap-y-[44px] "
            >
              <div className=" relative w-[350px] h-[467px] ">
                <Image
                  src={'/dokumPancaTimurR/electrical1.jpg'}
                  alt={'electrical1'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px]  ">
                <Image
                  src={'/dokumPancaTimurR/electrical2.jpg'}
                  alt={'electrical2'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px]  ">
                <Image
                  src={'/dokumPancaTimurR/electrical3.jpg'}
                  alt={'electrical3'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px] ">
                <Image
                  src={'/dokumPancaTimurR/electrical4.jpg'}
                  alt={'electrical4'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px] ">
                <Image
                  src={'/dokumPancaTimurR/electrical5.jpg'}
                  alt={'electrical5'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px] ">
                <Image
                  src={'/dokumPancaTimurR/electrical6.jpg'}
                  alt={'electrical6'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px] ">
                <Image
                  src={'/dokumPancaTimurR/electrical7.jpg'}
                  alt={'electrical7'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px] ">
                <Image
                  src={'/dokumPancaTimurR/electrical8.jpg'}
                  alt={'electrical8'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px] ">
                <Image
                  src={'/dokumPancaTimurR/hvac1.jpg'}
                  alt={'hvac1'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px] ">
                <Image
                  src={'/dokumPancaTimurR/hvac2.jpg'}
                  alt={'hvac2'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px] ">
                <Image
                  src={'/dokumPancaTimurR/hvac3.jpg'}
                  alt={'hvac3'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px] ">
                <Image
                  src={'/dokumPancaTimurR/hvac4.jpg'}
                  alt={'hvac4'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px] ">
                <Image
                  src={'/dokumPancaTimurR/hvac5.jpg'}
                  alt={'hvac5'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px] ">
                <Image
                  src={'/dokumPancaTimurR/hvac6.jpg'}
                  alt={'hvac6'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px] ">
                <Image
                  src={'/dokumPancaTimurR/hvac7.jpg'}
                  alt={'hvac7'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px] ">
                <Image
                  src={'/dokumPancaTimurR/hvac8.jpg'}
                  alt={'hvac8'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px] ">
                <Image
                  src={'/dokumPancaTimurR/hvac9.jpg'}
                  alt={'hvac9'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px] ">
                <Image
                  src={'/dokumPancaTimurR/hvac10.jpg'}
                  alt={'hvac10'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px] ">
                <Image
                  src={'/dokumPancaTimurR/hvac11.jpg'}
                  alt={'hvac11'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px] ">
                <Image
                  src={'/dokumPancaTimurR/hvac12.jpg'}
                  alt={'hvac12'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px] ">
                <Image
                  src={'/dokumPancaTimurR/mechanicalplumbing1.jpg'}
                  alt={'mechanicalplumbing1'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px] ">
                <Image
                  src={'/dokumPancaTimurR/mechanicalplumbing2.jpg'}
                  alt={'mechanicalplumbing2'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px] ">
                <Image
                  src={'/dokumPancaTimurR/mechanicalplumbing3.jpg'}
                  alt={'mechanicalplumbing3'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px] ">
                <Image
                  src={'/dokumPancaTimurR/mechanicalplumbing4.jpg'}
                  alt={'mechanicalplumbing4'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px] ">
                <Image
                  src={'/dokumPancaTimurR/mechanicalplumbing5.jpg'}
                  alt={'mechanicalplumbing5'}
                  className="object-cover"
                  fill
                />
              </div>
            </motion.div>
          </TabsContent>
          <TabsContent value="mechanicalplumbing" className="mt-[52px] md:mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  justify-items-center gap-y-[16px] md:gap-y-[24px] lg:gap-y-[44px]  "
            >
              <div className="relative w-[350px] h-[467px]">
                <Image
                  src={'/dokumPancaTimurR/mechanicalplumbing1.jpg'}
                  alt={'mechanicalplumbing1'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px]">
                <Image
                  src={'/dokumPancaTimurR/mechanicalplumbing2.jpg'}
                  alt={'mechanicalplumbing2'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px]">
                <Image
                  src={'/dokumPancaTimurR/mechanicalplumbing3.jpg'}
                  alt={'mechanicalplumbing3'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px]">
                <Image
                  src={'/dokumPancaTimurR/mechanicalplumbing4.jpg'}
                  alt={'mechanicalplumbing4'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px]">
                <Image
                  src={'/dokumPancaTimurR/mechanicalplumbing5.jpg'}
                  alt={'mechanicalplumbing5'}
                  className="object-cover"
                  fill
                />
              </div>
            </motion.div>
          </TabsContent>
          <TabsContent value="hvac" className="mt-[52px] md:mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  justify-items-center gap-y-[16px] md:gap-y-[24px] lg:gap-y-[44px]  "
            >
              <div className="relative w-[350px] h-[467px]">
                <Image
                  src={'/dokumPancaTimurR/hvac1.jpg'}
                  alt={'hvac1'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px]">
                <Image
                  src={'/dokumPancaTimurR/hvac2.jpg'}
                  alt={'hvac2'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px]">
                <Image
                  src={'/dokumPancaTimurR/hvac3.jpg'}
                  alt={'hvac3'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px]">
                <Image
                  src={'/dokumPancaTimurR/hvac4.jpg'}
                  alt={'hvac4'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px]">
                <Image
                  src={'/dokumPancaTimurR/hvac5.jpg'}
                  alt={'hvac5'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px]">
                <Image
                  src={'/dokumPancaTimurR/hvac6.jpg'}
                  alt={'hvac6'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px]">
                <Image
                  src={'/dokumPancaTimurR/hvac7.jpg'}
                  alt={'hvac7'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px]">
                <Image
                  src={'/dokumPancaTimurR/hvac8.jpg'}
                  alt={'hvac8'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px]">
                <Image
                  src={'/dokumPancaTimurR/hvac9.jpg'}
                  alt={'hvac9'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px]">
                <Image
                  src={'/dokumPancaTimurR/hvac10.jpg'}
                  alt={'hvac10'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px]">
                <Image
                  src={'/dokumPancaTimurR/hvac11.jpg'}
                  alt={'hvac11'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px]">
                <Image
                  src={'/dokumPancaTimurR/hvac12.jpg'}
                  alt={'hvac12'}
                  className="object-cover"
                  fill
                />
              </div>
            </motion.div>
          </TabsContent>
          <TabsContent value="electrical" className="mt-[52px] md:mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  justify-items-center gap-y-[16px] md:gap-y-[24px] lg:gap-y-[44px] "
            >
              <div className=" relative w-[350px] h-[467px]">
                <Image
                  src={'/dokumPancaTimurR/electrical1.jpg'}
                  alt={'electrical1'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px]">
                <Image
                  src={'/dokumPancaTimurR/electrical2.jpg'}
                  alt={'electrical2'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px]">
                <Image
                  src={'/dokumPancaTimurR/electrical3.jpg'}
                  alt={'electrical3'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px]">
                <Image
                  src={'/dokumPancaTimurR/electrical4.jpg'}
                  alt={'electrical4'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px]">
                <Image
                  src={'/dokumPancaTimurR/electrical5.jpg'}
                  alt={'electrical5'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px]">
                <Image
                  src={'/dokumPancaTimurR/electrical6.jpg'}
                  alt={'electrical6'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px]">
                <Image
                  src={'/dokumPancaTimurR/electrical7.jpg'}
                  alt={'electrical7'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="relative w-[350px] h-[467px]">
                <Image
                  src={'/dokumPancaTimurR/electrical8.jpg'}
                  alt={'electrical8'}
                  className="object-cover"
                  fill
                />
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </>
  )
}
