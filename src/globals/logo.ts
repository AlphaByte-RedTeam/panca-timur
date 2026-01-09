import { GlobalConfig } from 'payload'

export const LogoConfig: GlobalConfig = {
  slug: 'logo-config',
  admin: {
    group: {
      id: 'Pengaturan Website',
      en: 'Page Settings',
    },
  },
  label: {
    id: 'Logo Website',
    en: 'Website Logo',
  },

  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
