import { test, expect } from '@playwright/test'

test('insights-updates', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await expect(
    page.getByText('About UsSolutionsPortfolioInsights & Updates', { exact: true }),
  ).toBeVisible()
  await page.getByRole('link', { name: 'ke halaman insights updates', exact: true }).click()
  await expect(
    page.getByText('About UsSolutionsPortfolioInsights & UpdatesContact Us'),
  ).toBeVisible()
  await expect(
    page.locator('div').filter({ hasText: 'Insight dan pengalaman yang' }).nth(1),
  ).toBeVisible()
  await expect(
    page.getByText('Our Thoughts, Experience, and ExpertiseInsight dan pengalaman yang lahir dari'),
  ).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Blog' })).toBeVisible()
  await expect(
    page.locator('div').filter({ hasText: 'Test Test Test Test Test Test' }).nth(3),
  ).toBeVisible()
  await expect(page.getByRole('link', { name: 'Read More' }).first()).toBeVisible()
  await expect(
    page.getByText('Let’s Build Something Great Together!Dapatkan konsultasi cepat dan solusi'),
  ).toBeVisible()
  await expect(
    page.locator('div').filter({ hasText: 'Head Office:Komp. Perumahan' }).nth(1),
  ).toBeVisible()
  await page.getByRole('button', { name: 'Baca lebih lanjut blog (Read' }).first().click()
  await page.getByRole('link', { name: 'Read More' }).first().click()
  await page.goto('http://localhost:3000/detail-insights-updates/6965f7543994e0691417ddea')
  await expect(page.getByRole('navigation', { name: 'breadcrumb' })).toBeVisible()
  await expect(page.getByText('-01-26')).toBeVisible()
  await expect(
    page.locator('div').filter({ hasText: 'Head Office:Komp. Perumahan' }).nth(1),
  ).toBeVisible()
  await page.getByRole('link', { name: 'Insights & Updates' }).click()
  await expect(page.locator('.flex.flex-row.gap-4')).toBeVisible()
})
