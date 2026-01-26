import { GlobalConfig } from 'payload'

export const SolutionsConfig: GlobalConfig = {
  slug: 'solutions-page',
  admin: {
    group: {
      id: 'Pengaturan Website',
      en: 'Page Settings',
    },
  },
  label: {
    id: 'Halaman Solutions',
    en: 'Solutions Page',
  },

  fields: [
    {
      type: 'collapsible',
      label: {
        id: 'Bagian Gambar Utama',
        en: 'Main Image Section',
      },
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'solutions_hero',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: {
            id: 'Gambar Solutions Page',
            en: 'Solutions Page Picture',
          },
        },
        {
          name: 'solutions_hero_heading',
          type: 'text',
          label: {
            id: 'Judul',
            en: 'Heading',
          },
        },
        {
          name: 'solutions_hero_description',
          type: 'text',
          label: {
            id: 'Deskripsi',
            en: 'Description',
          },
        },
      ],
    },
    {
      type: 'collapsible',
      label: {
        id: 'Bagian Services',
        en: 'Services Section',
      },
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'solutions_services_heading',
          type: 'text',
          label: {
            id: 'Judul',
            en: 'Heading',
          },
        },
        {
          name: 'solutions_services_description',
          type: 'text',
          label: {
            id: 'Deskripsi',
            en: 'Description',
          },
        },
      ],
    },
    {
      type: 'collapsible',
      label: {
        id: 'Bagian Products',
        en: 'Products Section',
      },
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'solutions_products_heading',
          type: 'text',
          label: {
            id: 'Judul',
            en: 'Heading',
          },
        },
        {
          name: 'solutions_products_description',
          type: 'text',
          label: {
            id: 'Deskripsi',
            en: 'Description',
          },
        },
      ],
    },
  ],
}
