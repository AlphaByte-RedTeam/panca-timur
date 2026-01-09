import { GlobalConfig } from 'payload'

export const InsightsConfig: GlobalConfig = {
  slug: 'insights-page',
  admin: {
    group: {
      id: 'Pengaturan Website',
      en: 'Page Settings',
    },
  },
  label: {
    id: 'Halaman Insights',
    en: 'Insights Page',
  },

  fields: [
    {
      name: 'insights_hero',
      type: 'upload',
      relationTo: 'media',
      label: {
        id: 'Gambar Insights Page',
        en: 'Insights Page Picture',
      },
    },
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
          name: 'insights_hero_heading',
          type: 'text',
          label: {
            id: 'Judul',
            en: 'Heading',
          },
        },
        {
          name: 'insights_hero_description',
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
        id: 'Bagian Blog',
        en: 'Blog Section',
      },
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'blog_section_heading',
          type: 'text',
          label: {
            id: 'Judul',
            en: 'Heading',
          },
        },
        {
          name: 'blog_section_description',
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
