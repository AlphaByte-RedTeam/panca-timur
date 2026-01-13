import type { CollectionConfig } from 'payload'

export const Companies: CollectionConfig = {
  slug: 'companies',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  labels: {
    singular: {
      id: 'Perusahaan',
      en: 'Company',
    },
    plural: {
      id: 'Perusahaan',
      en: 'Companies',
    },
  },

  auth: false,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: {
        id: 'Nama',
        en: 'Name',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: {
        id: 'Gambar',
        en: 'Image',
      },
    },
  ],
}
