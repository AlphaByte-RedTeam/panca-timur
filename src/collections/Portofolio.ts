import type { CollectionConfig } from 'payload'

export const Portofolio: CollectionConfig = {
  slug: 'portofolio',
  admin: {
    useAsTitle: 'serviceName',
    defaultColumns: ['serviceName', 'createdAt', 'image'],
  },
  access: {
    read: () => true,
  },
  labels: {
    singular: {
      id: 'Portofolio',
      en: 'Portofolio',
    },
    plural: {
      id: 'Portofolio',
      en: 'Portofolios',
    },
  },
  hooks: {
    beforeChange: [
      async ({ data, req, operation }) => {
        if (operation === 'create' || operation === 'update') {
          if (data.tag) {
            const relatedService = await req.payload.findByID({
              collection: 'services',
              id: data.tag,
              depth: 0,
            })
            console.log(relatedService)
            if (relatedService) {
              data.serviceName = relatedService.title
            }
          }
        }
        return data
      },
    ],
  },
  fields: [
    {
      name: 'serviceName',
      type: 'text',
      admin: {
        hidden: true,
      },
    },
    {
      name: 'tag',
      type: 'relationship',
      relationTo: 'services',
      required: true,
      label: {
        id: 'Tag Portofolio',
        en: 'Tag',
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
