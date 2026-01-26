import type { CollectionConfig } from 'payload'
// TODO : consider 
export const Documents: CollectionConfig = {
  slug: 'documents',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  labels: {
    singular: {
      id: 'Surat surat',
      en: 'Document',
    },
    plural: {
      id: 'Surat surat',
      en: 'Documents',
    },
  },
  auth: false,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: {
        id: 'Nama Dokumen',
        en: 'Name',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: {
        id: 'Gambar Dokumen',
        en: 'Image',
      },
    },
  ],
}
