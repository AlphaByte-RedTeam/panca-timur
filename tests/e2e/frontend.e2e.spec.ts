import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await expect(page.getByRole('heading', { name: 'Delivering Quality Mechanical' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'ke halaman about us', exact: true })).toBeVisible()
  await expect(page.getByLabel('ke halaman portfolio', { exact: true })).toContainText('Portfolio')
  await page.getByRole('link', { name: 'ke halaman about us', exact: true }).click()
  await expect(page.getByRole('img', { name: 'Team PT Panca Timur Raya' })).toBeVisible()
  await expect(page.locator('body')).toContainText('Who We Are Behind Every Reliable Project')
  await page
    .getByRole('button', { name: 'Lihat dokumen perusahaan Perizinan Berusaha Berbasis Resiko' })
    .click()
  await page.getByRole('button', { name: 'Close' }).click()
  await page
    .getByRole('button', { name: 'Lihat dokumen perusahaan Perizinan Berusaha Berbasis Resiko' })
    .click()
  await expect(page.getByText('Akta Pendirian No. 26 – 26')).toBeVisible()
  await page.getByRole('link', { name: 'ke halaman solutions', exact: true }).click()
  await expect(page.getByRole('img', { name: 'Electrical' }).first()).toBeVisible()
  await expect(page.locator('body')).toContainText(
    'Smart Solutions for Reliable Mechanical Electrical Plumbing Systems',
  )
  await expect(page.getByRole('heading', { name: 'Products' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Services' })).toBeVisible()
  await page
    .getByRole('group')
    .filter({ hasText: 'Mechanical & PlumbingLayanan' })
    .getByLabel('Pelajari lebih lanjut')
    .click()
  await expect(
    page.locator('div').filter({ hasText: 'Mechanical & PlumbingLayanan' }).nth(5),
  ).toBeVisible()
  await page
    .getByRole('group')
    .filter({ hasText: 'Mechanical & PlumbingLayanan' })
    .getByLabel('Pelajari lebih lanjut')
    .click()
  await page.getByRole('link', { name: 'ke halaman portfolio', exact: true }).click()
  await expect(page.getByRole('img', { name: 'HVAC System' }).first()).toBeVisible()
  await expect(page.locator('body')).toContainText(
    'Proven Experience in Mechanical Electrical and Plumbing Works',
  )
  await expect(page.getByRole('heading', { name: 'Portfolio' })).toBeVisible()
  await expect(page.getByRole('img', { name: 'HVAC System' }).nth(1)).toBeVisible()
  await page.getByRole('tab', { name: 'Mechanical & Plumbing' }).click()
  await expect(page.getByRole('img', { name: 'Mechanical & Plumbing' }).first()).toBeVisible()
  await page.getByRole('tab', { name: 'HVAC' }).click()
  await expect(page.getByRole('img', { name: 'HVAC System' }).nth(1)).toBeVisible()
  await page.getByRole('tab', { name: 'Electrical' }).click()
  await expect(page.getByRole('img', { name: 'Electrical' }).first()).toBeVisible()
  await page.getByRole('button', { name: 'Muat foto lebih banyak' }).click()
  await page.getByRole('link', { name: 'ke halaman insights updates', exact: true }).click()
  await page.goto('http://localhost:3000/detail-insights-updates')
  await expect(page.getByRole('img', { name: 'Proyek PT PTR' }).first()).toBeVisible()
  await expect(page.locator('body')).toContainText('Our Thoughts, Experience, and Expertise')
  await expect(page.getByRole('heading', { name: 'Blog' })).toBeVisible()
  await page.getByRole('link', { name: 'Read More' }).first().click()
  await page.goto('http://localhost:3000/detail-insights-updates/6965f7543994e0691417ddea')
  await expect(page.getByText('HomeInsights & UpdatesTest')).toBeVisible()
  await page.getByRole('link', { name: 'ke halaman Insights Updates', exact: true }).click()
  await page.getByRole('link', { name: 'kembali ke halaman utama (' }).click()
})
