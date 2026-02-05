import { test, expect } from '@playwright/test'

test('about-us', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await expect(
    page.getByText('About UsSolutionsPortfolioInsights & Updates', { exact: true }),
  ).toBeVisible()
  await page.getByRole('link', { name: 'ke halaman about us', exact: true }).click()
  await expect(
    page.getByText('About UsSolutionsPortfolioInsights & UpdatesContact Us'),
  ).toBeVisible()
  await expect(
    page.getByText('Who We Are Behind Every Reliable ProjectSetiap proyek yang andal lahir dari'),
  ).toBeVisible()
  await expect(
    page.getByText('PT. Panca Timur Raya merupakan perusahaan swasta berskala nasional yang'),
  ).toBeVisible()
  await expect(page.getByText('Our MissionMemenuhi kepuasan')).toBeVisible()
  await expect(page.getByText('Jujur Komitmen Responsibel')).toBeVisible()
  await expect(page.getByText('Perizinan Berusaha Berbasis ResikoView Document')).toBeVisible()
  await expect(
    page.locator('div').filter({ hasText: 'Verified documents that' }).nth(1),
  ).toBeVisible()
  await expect(
    page.getByText('Let’s Build Something Great Together!Dapatkan konsultasi cepat dan solusi'),
  ).toBeVisible()
  await page
    .getByRole('button', { name: 'Lihat dokumen perusahaan Perizinan Berusaha Berbasis Resiko' })
    .click()
})
