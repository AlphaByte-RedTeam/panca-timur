import { test, expect } from '@playwright/test'

test('portfolio', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await expect(
    page.getByText('About UsSolutionsPortfolioInsights & Updates', { exact: true }),
  ).toBeVisible()
  await page.getByRole('link', { name: 'ke halaman portfolio', exact: true }).click()
  await page.goto('http://localhost:3000/detail-portfolio')
  await expect(
    page.getByText('About UsSolutionsPortfolioInsights & UpdatesContact Us'),
  ).toBeVisible()
  await expect(
    page.getByText(
      'Proven Experience in Mechanical Electrical and Plumbing WorksSolusi Mechanical',
    ),
  ).toBeVisible()
  await expect(page.locator('div').filter({ hasText: 'AllMechanical &' }).nth(3)).toBeVisible()
  await expect(page.getByRole('img', { name: 'HVAC System' }).nth(1)).toBeVisible()
  await expect(page.getByRole('button', { name: 'Muat foto lebih banyak' })).toBeVisible()
  await page.getByRole('tab', { name: 'Mechanical & Plumbing' }).click()
  await page.getByRole('tab', { name: 'HVAC' }).click()
  await page.getByRole('tab', { name: 'Electrical' }).click()
  await page.getByRole('button', { name: 'Muat foto lebih banyak' }).click()
  await expect(
    page.getByText('Let’s Build Something Great Together!Dapatkan konsultasi cepat dan solusi'),
  ).toBeVisible()
  await expect(
    page.locator('div').filter({ hasText: 'Head Office:Komp. Perumahan' }).nth(1),
  ).toBeVisible()
  await expect(page.getByRole('img', { name: 'Electrical' }).nth(2)).toBeVisible()
})
