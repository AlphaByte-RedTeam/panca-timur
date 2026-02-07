import {
  Blog,
  Company,
  Document as PayloadDocument,
  Portofolio,
  Product,
  Service,
} from '../../src/payload-types'

export interface PayloadRichText {
  root: {
    type: string
    children: Array<{
      type: string
      version: number
      children?: Array<{
        type: string
        text?: string
        version: number
        [key: string]: unknown
      }>
      [key: string]: unknown
    }>
    direction: 'ltr' | 'rtl' | null
    format: '' | 'left' | 'start' | 'center' | 'right' | 'end' | 'justify'
    indent: number
    version: number
  }
  // This allows for other top-level keys if Payload adds them
  [key: string]: unknown
}

function makeRichText(): PayloadRichText {
  return {
    root: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              text: 'Placeholder',
              version: 1,
            },
          ],
          version: 1,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  }
}

export function makeCompany(overrides: Partial<Company> = {}): Company {
  return {
    id: 'Company-id',
    name: 'company',
    image: 'https://www.example.com/images',
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    ...overrides,
  }
}

export function makeDocument(overrides: Partial<PayloadDocument> = {}): PayloadDocument {
  return {
    id: 'Document-id',
    name: 'Document',
    image: 'https://www.example.com/images',
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    ...overrides,
  }
}

export function makeProduct(overrides: Partial<Product> = {}): Product {
  return {
    id: 'Product-id',
    name: 'Product',
    image: 'https://www.example.com/images',
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    ...overrides,
  }
}
export function makePortofolio(overrides: Partial<Portofolio> = {}): Portofolio {
  return {
    id: 'Portofolio-id',
    tag: 'HVAC',
    image: 'https://www.example.com/images',
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    ...overrides,
  }
}

export function makeService(overrides: Partial<Service> = {}): Service {
  return {
    id: 'Service-id',
    title: 'Service',
    excerpt: 'lorem ipsum',
    content: makeRichText(),
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    ...overrides,
  }
}

export function makeBlog(overrides: Partial<Blog> = {}): Blog {
  return {
    id: 'Blog-id',
    title: 'Placeholder title',
    excerpt: 'example excerpt',
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    content: makeRichText(),
    ...overrides,
  }
}
