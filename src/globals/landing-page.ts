import { GlobalConfig } from 'payload'

export const LandingConfig: GlobalConfig = {
  slug: 'landing-page',
  admin: {
    group: {
      id: 'Pengaturan Website',
      en: 'Page Settings',
    },
  },
  label: {
    id: 'Halaman Landing Page',
    en: 'Landing Page',
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
          name: 'landing_hero',
          type: 'upload',
          relationTo: 'media',
          label: {
            id: 'Gambar Landing Page',
            en: 'Landing Page Picture',
          },
        },
        {
          name: 'hero_heading',
          type: 'text',
          label: {
            id: 'Judul',
            en: 'Heading',
          },
        },
        {
          name: 'hero_description',
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
        id: 'Teks atas',
        en: 'Top Card',
      },
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'top_card_heading',
          type: 'text',
          label: {
            id: 'Judul',
            en: 'Heading',
          },
        },
        {
          name: 'top_card_description',
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
