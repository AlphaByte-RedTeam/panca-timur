import { GlobalConfig } from 'payload'

export const FooterConfig: GlobalConfig = {
  slug: 'footer-config',
  admin: {
    group: {
      id: 'Pengaturan Website',
      en: 'Page Settings',
    },
  },
  label: {
    id: 'Konfigurasi Footer',
    en: 'Footer Configuration',
  },

  fields: [
    {
      name: 'footer_heading',
      type: 'text',
      label: {
        id: 'Judul',
        en: 'Heading',
      },
    },
    {
      name: 'footer_description',
      type: 'text',
      label: {
        id: 'Deskripsi',
        en: 'Description',
      },
    },
  ],
}
