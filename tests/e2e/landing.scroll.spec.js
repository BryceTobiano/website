const { test, expect } = require("@playwright/test");
const { gotoLandingPage, waitForScrollReveal } = require("./helpers/landing-page");

test.describe("Landing page animation behavior", () => {
  test("applies the reveal class when scroll-triggered elements enter the viewport", async ({
    page,
  }) => {
    await gotoLandingPage(page);
    await waitForScrollReveal(page);

    const projectCard = page.getByTestId("project-card-fpga-cnn");

    await expect(projectCard).not.toHaveClass(/\bis-visible\b/);

    await projectCard.scrollIntoViewIfNeeded();

    await expect
      .poll(() =>
        projectCard.evaluate((element) => element.classList.contains("is-visible")),
      )
      .toBe(true);
  });
});
