import { test, expect } from '@playwright/test'
import {
  makeBlog,
  makeCompany,
  makeDocument,
  makePortofolio,
  makeProduct,
  makeService,
} from 'tests/_factories/factories'

test('companies rendered ', async ({ page }) => {
  await page.route('**/api/companies**', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        docs: [makeCompany()],
        totalDocs: 1,
      }),
    })
  })
  await page.goto('http://localhost:3000')
  await expect(page.locator('.animate-marquee .overflow-hidden')).toHaveCount(4 * 1)
})

test('documents fetched ', async ({ page }) => {
  await page.route('**/api/documents**', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        docs: [makeDocument()],
        totalDocs: 1,
      }),
    })
  })
  await page.goto('http://localhost:3000')
  expect(true).toBe(true) // TODO : handle
})

test(' 4 services added ', async ({ page }) => {
  await page.route('**/api/services**', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        docs: [makeService(), makeService(), makeService(), makeService()],
        totalDocs: 4,
      }),
    })
  })
  await page.goto('http://localhost:3000')
  await expect(page.locator('div[data-slot="carousel-item"]')).toHaveCount(4)
})

test(' 4 portofolio added ', async ({ page }) => {
  await page.route('**/api/portofolio**', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        docs: [makePortofolio(), makePortofolio(), makePortofolio(), makePortofolio()],
        totalDocs: 4,
      }),
    })
  })
  await page.goto('http://localhost:3000/detail-portfolio')
  const parent = page.locator('div[class~="grid-cols-1"]')
  await expect(parent.locator(':scope > *')).toHaveCount(4)
})

test(' 4 products added ', async ({ page }) => {
  await page.route('**/api/products**', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        docs: [makeProduct(), makeProduct(), makeProduct(), makeProduct()],
        totalDocs: 4,
      }),
    })
  })
  await page.goto('http://localhost:3000/detail-solutions')
  const parent = page.locator('div[class~="grid-cols-1"]')
  await expect(parent.locator(':scope > *')).toHaveCount(4)
})

test(' add blog ', async ({ page }) => {
  await page.route('**/api/blogs**', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        docs: [makeBlog(), makeBlog(), makeBlog()],
        totalDocs: 3,
      }),
    })
  })
  await page.goto('http://localhost:3000/detail-insights-updates')
  await expect(page.locator('a', { hasText: 'Read More' })).toHaveCount(3)
})
