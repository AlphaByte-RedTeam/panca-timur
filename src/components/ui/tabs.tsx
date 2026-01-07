'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '@/lib/utils'

function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root data-slot="tabs" className={cn('flex flex-col ', className)} {...props} />
  )
}

function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        'bg-muted h4blog text-[#747775] inline-flex h-9 w-fit items-center rounded-[12px] px-[20px] py-[13px]  md:px-[44px] lg:py-[32px] gap-[8px] md:gap-[12px]',
        className,
      )}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        `
    inline-flex items-center 
    px-3 py-1.5 
    rounded-[12px]
    border border-[#10385D]
    
    transition-colors
    whitespace-nowrap

    data-[state=active]:bg-[#E1EDF9]
    data-[state=active]:text-[black]

    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-[#10385D]/50

    disabled:pointer-events-none
    disabled:opacity-50
    `,
        className,
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn('outline-none', className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
