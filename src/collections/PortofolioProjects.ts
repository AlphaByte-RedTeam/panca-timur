import type { CollectionConfig } from 'payload'

export const PortofolioProjects: CollectionConfig = {
  slug: 'portofolio-projects',

  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
  },
  labels: {
    singular: {
      id: 'Proyek',
      en: 'Project',
    },
    plural: {
      id: 'Proyek',
      en: 'Projects',
    },
  },

  fields: [
    {
      name: 'year',
      type: 'text',
      required: true,
      validate: (val: string | null | undefined) => {
        if (Number(val) > 999 && Number(val) <= 9999) {
          return true
        } else {
          return 'Invalid Year'
        }
      },

      label: {
        id: 'Tahun (4 digit)',
        en: 'Year (4 digits)',
      },
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      label: {
        id: 'Nama proyek',
        en: 'Project Name',
      },
    },
    {
      name: 'description',
      type: 'text',
      required: true,
      label: {
        id: 'Deskripsi proyek',
        en: 'Project Description',
      },
    },
  ],
}
