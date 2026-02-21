// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { resendAdapter } from '@payloadcms/email-resend'
import path from 'node:path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Products } from './collections/Products'
import { Portofolio } from './collections/Portofolio'
import { Services } from './collections/Services'
import { Blogs } from './collections/Blogs'
import { Companies } from './collections/Companies'

import { en } from '@payloadcms/translations/languages/en'
import { id } from '@payloadcms/translations/languages/id'

import { AboutUsConfig } from './globals/about-us-page'
import { InsightsConfig } from './globals/insights-page'
import { LandingConfig } from './globals/landing-page'
import { PortofolioConfig } from './globals/portofolio-page'
import { SolutionsConfig } from './globals/solutions-page'
import { SiteConfig } from './globals/site-config'
import { PortofolioProjects } from './collections/PortofolioProjects'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Companies, Products, Services, Portofolio, PortofolioProjects, Blogs],
  email: resendAdapter({
    defaultFromAddress: 'noreply@team37.co',
    defaultFromName: 'Reset Password (noreply)',
    apiKey: process.env.RESEND_API_KEY || '',
  }),
  globals: [
    AboutUsConfig,
    InsightsConfig,
    LandingConfig,
    PortofolioConfig,
    SolutionsConfig,
    SiteConfig,
  ],
  i18n: {
    supportedLanguages: { id, en },
    fallbackLanguage: 'id',
    translations: {
      id: {
        lexical: {
          general: {
            slashMenuListGroupLabel: 'Daftar',
            slashMenuBasicGroupLabel: 'Komponen Dasar',
          },
          heading: {
            label: 'Heading',
          },
          checklist: {
            label: 'Ceklis',
          },
          orderedList: {
            label: 'Poin Poin Nomor',
          },
          unorderedList: {
            label: 'Poin Poin Titik',
          },
          horizontalRule: {
            label: 'Garis Horizontal',
          },
          upload: {
            label: 'Upload Gambar',
          },
          blockquote: {
            label: 'Kutipan',
          },
          relationship: {
            label: 'Link blog lain',
          },
          paragraph: {
            label: 'Teks paragraf',
          },
        },
      },
    },
  },

  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      // Token provided by Vercel once Blob storage is added to your Vercel project
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
})
