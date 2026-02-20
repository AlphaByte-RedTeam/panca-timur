'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

function Table({ className, ...props }: React.ComponentProps<'table'>) {
  return (
    <div data-slot="table-container" className="relative w-full overflow-x-auto font-manrope">
      <table
        data-slot="table"
        className={cn(
          'w-full caption-bottom border border-black text-[12px] md:text-[13px] lg:text-[14px]',
          className,
        )}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
  return <thead data-slot="table-header" className={className} {...props} />
}

function TableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
  return <tbody data-slot="table-body" className={className} {...props} />
}

function TableFooter({ className, ...props }: React.ComponentProps<'tfoot'>) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn('bg-muted/50 border-t font-medium', className)}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      data-slot="table-row"
      className={cn('hover:bg-muted/30 transition-colors', className)}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<'th'>) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        `
        h-[48px] md:h-[50px] lg:h-[52px]
        px-3 md:px-4 lg:px-6
        align-middle
        text-[14px] md:text-[16px]
        font-bold
        border border-black
        bg-[#E1EDF9]
        text-[#0062B0]
        whitespace-nowrap
        `,
        className,
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<'td'>) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        `
        px-3 md:px-4 lg:px-6
        py-2 md:py-3 lg:py-4
        align-middle
        text-[12px] md:text-[13px] lg:text-[14px]
        font-normal
        border border-black
        text-foreground
        font-manrope
        `,
        className,
      )}
      {...props}
    />
  )
}

function TableCaption({ className, ...props }: React.ComponentProps<'caption'>) {
  return (
    <caption
      data-slot="table-caption"
      className={cn(
        'mt-4 text-[12px] md:text-[13px] text-muted-foreground font-manrope',
        className,
      )}
      {...props}
    />
  )
}

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption }
