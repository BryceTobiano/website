const { test, expect } = require("@playwright/test");
const {
  gotoLandingPage,
  prepareLandingPageForScreenshots,
} = require("./helpers/landing-page");

test.describe("Landing page visual regression", () => {
  test("matches the full landing page", async ({ page }) => {
    await prepareLandingPageForScreenshots(page);

    await expect(page.getByTestId("page-shell")).toHaveScreenshot("landing-page.png");
  });

  test("matches the hero section", async ({ page }) => {
    await gotoLandingPage(page);

    await expect(page.getByTestId("hero-section")).toHaveScreenshot("hero-section.png");
  });
});
