const { test, expect } = require("@playwright/test");
const {
  assertNoHorizontalOverflow,
  gotoLandingPage,
  waitForScrollReveal,
} = require("./helpers/landing-page");

test.describe("Landing page responsiveness", () => {
  test("adapts navigation and layout to the active viewport", async ({ page }, testInfo) => {
    await gotoLandingPage(page);
    await waitForScrollReveal(page);
    await assertNoHorizontalOverflow(page);

    const isDesktopViewport = testInfo.project.name === "chromium-desktop";
    const desktopNav = page.getByTestId("desktop-nav");
    const mobileMenuButton = page.getByTestId("mobile-menu-button");

    if (isDesktopViewport) {
      await expect(desktopNav).toBeVisible();
      await expect(mobileMenuButton).toBeHidden();
    } else {
      await expect(mobileMenuButton).toBeVisible();
      await expect(desktopNav).toBeHidden();

      await mobileMenuButton.click();
      await expect(page.getByTestId("mobile-nav")).toBeVisible();
      await expect(page.getByTestId("mobile-menu-close-button")).toBeVisible();
    }

    await expect(page.getByTestId("hero-section")).toBeVisible();
    await expect(page.getByTestId("selected-work-section")).toBeAttached();
  });
});
