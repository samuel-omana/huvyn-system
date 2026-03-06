import { test, expect } from '@playwright/test';

test.describe('Home Page Flow', () => {
    test('should load the homepage and display critical elements', async ({ page }) => {
        // Navigate to the root URL (configured internally to http://localhost:3000)
        await page.goto('/');

        // Wait for the locale redirection or hydration to settle
        await page.waitForLoadState('networkidle');

        // Verify the Next.js layout generated properly (checking the title from metadata)
        await expect(page).toHaveTitle(/Huvyn/i);

        // Verify the tracking search input is visible (via our newly injected ARIA label or role)
        const searchInput = page.getByRole('searchbox');
        await expect(searchInput).toBeVisible();

        // Verify that the Navbar Globe icon (change language) is present
        const languageBtn = page.getByRole('button', { expanded: false }).first();
        await expect(languageBtn).toBeVisible();
    });
});
