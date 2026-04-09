const { test, expect } = require("@playwright/test");
const { gotoLandingPage } = require("./helpers/landing-page");

test.describe("Landing page smoke coverage", () => {
  test("renders without errors and exposes the main sections", async ({ page }) => {
    await gotoLandingPage(page);

    await expect(page).toHaveTitle(/Bryce Tobiano/);
    await expect(page.getByTestId("page-main")).toBeVisible();

    const heroSection = page.getByTestId("hero-section");
    await expect(heroSection).toBeVisible();
    await expect(heroSection.getByRole("heading", { level: 1, name: /i'm bryce/i })).toBeVisible();

    const pageEnterElements = heroSection.locator(".page-enter");
    await expect(pageEnterElements).toHaveCount(4);
    await expect
      .poll(() => pageEnterElements.first().evaluate((element) => getComputedStyle(element).animationName))
      .toBe("pageFadeIn");

    const keySections = [
      page.getByTestId("experience-section"),
      page.getByTestId("selected-work-section"),
      page.getByTestId("site-footer"),
    ];

    for (const section of keySections) {
      await section.scrollIntoViewIfNeeded();
      await expect(section).toBeVisible();
    }
  });
});
