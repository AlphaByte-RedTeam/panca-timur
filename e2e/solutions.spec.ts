import { test, expect } from '@playwright/test'

test('solutions', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await expect(
    page.getByText('About UsSolutionsPortfolioInsights & Updates', { exact: true }),
  ).toBeVisible()
  await page.getByRole('link', { name: 'ke halaman solutions', exact: true }).click()
  await expect(
    page.getByText('About UsSolutionsPortfolioInsights & UpdatesContact Us'),
  ).toBeVisible()
  await expect(page.locator('div').filter({ hasText: 'Layanan Mechanical,' }).nth(1)).toBeVisible()
  await expect(page.getByText('Mechanical & PlumbingLayanan')).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Services' })).toBeVisible()
  await expect(page.locator('div').filter({ hasText: 'Diffuser' }).nth(3)).toBeVisible()
  await expect(
    page.getByText('Let’s Build Something Great Together!Dapatkan konsultasi cepat dan solusi'),
  ).toBeVisible()
  await expect(
    page.locator('div').filter({ hasText: 'Head Office:Komp. Perumahan' }).nth(1),
  ).toBeVisible()
  await expect(
    page
      .getByRole('group')
      .filter({ hasText: 'ElectricalInstalasi sistem' })
      .getByLabel('Pelajari lebih lanjut'),
  ).toBeVisible()
  await expect(page.getByRole('button', { name: 'Kontak Panca Timur Raya' })).toBeVisible()
})
