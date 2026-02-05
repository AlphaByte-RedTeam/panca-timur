import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await expect(
    page.getByText('About UsSolutionsPortfolioInsights & UpdatesContact Us'),
  ).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Delivering Quality Mechanical' })).toBeVisible()
  await expect(page.getByText('About UsPT. Panca Timur Raya')).toBeVisible()
  await expect(page.getByText('Book a ConsultationView')).toBeVisible()
  await page.locator('div').filter({ hasText: 'Mechanical & PlumbingLayanan' }).nth(5).click()
  await expect(page.locator('div').filter({ hasText: 'Jet Nozzel' }).nth(3)).toBeVisible()
  await expect(page.locator('.relative.flex.justify-center')).toBeVisible()
  await expect(page.locator('.flex.w-max')).toBeVisible()
  await expect(page.getByText('Insights & UpdatesTest Test')).toBeVisible()
  await expect(
    page.getByText('Let’s Build Something Great Together!Dapatkan konsultasi cepat dan solusi'),
  ).toBeVisible()
  await expect(
    page.locator('div').filter({ hasText: 'Head Office:Komp. Perumahan' }).nth(1),
  ).toBeVisible()
  await page.getByRole('link', { name: 'ke halaman about us', exact: true }).click()
  await expect(
    page.getByText('Who We Are Behind Every Reliable ProjectSetiap proyek yang andal lahir dari'),
  ).toBeVisible()
  await expect(
    page.getByText('About UsSolutionsPortfolioInsights & UpdatesContact UsWho We Are Behind Every'),
  ).toBeVisible()
  await expect(page.getByText('Perizinan Berusaha Berbasis ResikoView Document')).toBeVisible()
  await page
    .getByRole('button', { name: 'Lihat dokumen perusahaan Perizinan Berusaha Berbasis Resiko' })
    .click()
  await page.getByRole('button', { name: 'Close' }).click()
  await expect(
    page.getByText('Let’s Build Something Great Together!Dapatkan konsultasi cepat dan solusi'),
  ).toBeVisible()
  await page.getByRole('link', { name: 'ke halaman portfolio', exact: true }).click()
  await expect(
    page.getByText(
      'Proven Experience in Mechanical Electrical and Plumbing WorksSolusi Mechanical',
    ),
  ).toBeVisible()
  await expect(page.locator('div').filter({ hasText: 'AllMechanical &' }).nth(3)).toBeVisible()
  await page.getByRole('tab', { name: 'Mechanical & Plumbing' }).click()
  await page.getByRole('tab', { name: 'HVAC' }).click()
  await page.getByText('AllMechanical &').click()
  await page.getByRole('tab', { name: 'Electrical' }).click()
  await page.getByRole('button', { name: 'Muat foto lebih banyak' }).click()
})
