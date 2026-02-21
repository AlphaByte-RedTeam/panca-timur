import { GlobalConfig } from 'payload'

export const PortofolioConfig: GlobalConfig = {
  slug: 'portofolio-page',
  admin: {
    group: {
      id: 'Pengaturan Website',
      en: 'Page Settings',
    },
  },
  label: {
    id: 'Halaman Portofolio',
    en: 'Portofolio Page',
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
          name: 'portofolio_hero',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: {
            id: 'Gambar Portofolio Page',
            en: 'Portofolio Page Picture',
          },
        },
        {
          name: 'portofolio_hero_heading',
          type: 'text',
          label: {
            id: 'Judul',
            en: 'Heading',
          },
        },
        {
          name: 'portofolio_hero_description',
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
        id: 'Bagian Proyek Portofolio',
        en: 'Portofolio Projects Section',
      },
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'portofolio_project_heading',
          type: 'text',
          label: {
            id: 'Judul Proyek',
            en: 'Project Heading',
          },
        },
        {
          name: 'portofolio_project_description',
          type: 'text',
          label: {
            id: 'Deskripsi Proyek',
            en: 'Project Description ',
          },
        },
        {
          name: 'portofolio_gallery_heading',
          type: 'text',
          label: {
            id: 'Judul Galeri',
            en: 'Gallery Heading',
          },
        },
        {
          name: 'portofolio_gallery_description',
          type: 'text',
          label: {
            id: 'Deskripsi Galeri',
            en: 'Gallery Description',
          },
        },
      ],
    },
  ],
}
