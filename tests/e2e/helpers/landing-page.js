const { expect } = require("@playwright/test");

async function gotoLandingPage(page) {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("load");
  await expect(page.getByTestId("hero-section")).toBeVisible();
}

async function assertNoHorizontalOverflow(page) {
  await expect
    .poll(() =>
      page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1),
    )
    .toBe(true);
}

async function waitForScrollReveal(page) {
  await expect
    .poll(() => page.evaluate(() => document.documentElement.dataset.js))
    .toBe("true");
}

async function revealAllScrollSections(page) {
  await page.evaluate(() => {
    document.documentElement.dataset.js = "true";

    document.querySelectorAll("[data-reveal]").forEach((element) => {
      element.classList.add("is-visible");
    });
  });
}

async function prepareLandingPageForScreenshots(page) {
  await gotoLandingPage(page);
  await waitForScrollReveal(page);
  await page.addStyleTag({
    content: `
      [data-testid="page-shell"] > aside {
        position: static !important;
      }
    `,
  });
  await revealAllScrollSections(page);

  const selectedWorkSection = page.getByTestId("selected-work-section");
  const firstProjectCard = page.getByTestId("project-card-fpga-cnn");

  await selectedWorkSection.scrollIntoViewIfNeeded();
  await expect(firstProjectCard).toBeVisible();
  await page.waitForFunction(() => Array.from(document.images).every((image) => image.complete));
  await page.evaluate(() => window.scrollTo(0, 0));
}

module.exports = {
  assertNoHorizontalOverflow,
  gotoLandingPage,
  prepareLandingPageForScreenshots,
  waitForScrollReveal,
};
