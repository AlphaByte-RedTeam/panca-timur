import { GlobalConfig } from 'payload'

export const Settings: GlobalConfig = {
  slug: 'settings',
  admin: {
    group: {
      id: 'Pengaturan Umum',
      en: 'General Settings',
    },
  },
  label: {
    id: 'Pengaturan',
    en: 'Settings',
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      type: 'collapsible',
      label: {
        id: 'Gambar Website Utama',
        en: 'Website Main Pictures',
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
          name: 'about_us_hero',
          type: 'upload',
          relationTo: 'media',
          label: {
            id: 'Gambar About Us Page',
            en: 'About Us Page Picture',
          },
        },
        {
          name: 'solutions_hero',
          type: 'upload',
          relationTo: 'media',
          label: {
            id: 'Gambar Solutions Page',
            en: 'Solutions Page Picture',
          },
        },
        {
          name: 'portofolio_hero',
          type: 'upload',
          relationTo: 'media',
          label: {
            id: 'Gambar Portofolio Page',
            en: 'Portofolio Page Picture',
          },
        },
        {
          name: 'insights_hero',
          type: 'upload',
          relationTo: 'media',
          label: {
            id: 'Gambar Insights Page',
            en: 'Insights Page Picture',
          },
        },
      ],
    },
    {
      type: 'collapsible',
      label: {
        id: 'Gambar Portofolio Utama',
        en: 'Portofolio Main Pictures',
      },
      fields: [
        {
          name: 'portofolio_1',
          type: 'upload',
          relationTo: 'media',
          label: {
            id: 'Gambar Portofolio 1',
            en: 'Portofolio 1st Picture',
          },
        },
        {
          name: 'portofolio_2',
          type: 'upload',
          relationTo: 'media',
          label: {
            id: 'Gambar Portofolio 1',
            en: 'Portofolio 2nd Picture',
          },
        },
      ],
    },
  ],
}
