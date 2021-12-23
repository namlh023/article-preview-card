const BROWSER_FONTSIZE = window.getComputedStyle(
  document.querySelector("body")
).fontSize;
const DESKTOP = 90 * parseFloat(BROWSER_FONTSIZE); // 90em = 1440px / 16px

const share_icon = document.querySelector(".js-share-icon");
const share_icon_mobile_active = document.querySelector(
  ".js-share-icon-mobile-active"
);
const footer_mobile_active = document.querySelector(".js-footer-mobile-active");
const footer_desktop_active = document.querySelector(
  ".js-footer-desktop-active"
);

footer_desktop_active.style.display = "none"; // Default vault

share_icon.addEventListener("click", function () {
  if (window.innerWidth < DESKTOP) {
    footer_mobile_active.style.bottom = "0";
  } else {
    footer_desktop_active.style.display === "none"
      ? (footer_desktop_active.style.display = "flex")
      : (footer_desktop_active.style.display = "none");
  }
});

share_icon_mobile_active.addEventListener("click", function () {
  if (window.innerWidth < DESKTOP) {
    footer_mobile_active.style.bottom = "-6.25rem";
  }
});
