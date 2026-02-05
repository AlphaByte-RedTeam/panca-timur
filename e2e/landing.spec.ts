import { test, expect } from '@playwright/test'

test('landing', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await expect(
    page.getByText('About UsSolutionsPortfolioInsights & Updates', { exact: true }),
  ).toBeVisible()
  await expect(
    page.getByText(
      'Delivering Quality Mechanical Electrical and Plumbing SolutionsSejak 2013, PT.',
    ),
  ).toBeVisible()
  await expect(page.getByText('About UsPT. Panca Timur Raya')).toBeVisible()
  await expect(page.getByText('Mechanical & PlumbingLayanan')).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Products' })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Lihat semua solusi layanan' })).toBeVisible()
  await expect(page.getByRole('img', { name: 'Proyek PT PTR' }).first()).toBeVisible()
  await expect(page.locator('.flex.w-max')).toBeVisible()
  await expect(
    page.locator('div').filter({ hasText: 'Test Test Test Test Test Test' }).nth(3),
  ).toBeVisible()
  await expect(
    page.getByText('Let’s Build Something Great Together!Dapatkan konsultasi cepat dan solusi'),
  ).toBeVisible()
  await expect(
    page.locator('div').filter({ hasText: 'Head Office:Komp. Perumahan' }).nth(1),
  ).toBeVisible()
})
